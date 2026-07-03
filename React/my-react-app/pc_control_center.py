import os
import glob
import shutil
import subprocess
import tkinter as tk


ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
APP_SCRIPT = os.path.join(ROOT_DIR, "my_keyboard.py")
PYTHONW_EXE = os.path.join(ROOT_DIR, ".venv", "Scripts", "pythonw.exe")
USER_LOCAL_APPDATA = os.path.join(os.path.expanduser("~"), "AppData", "Local")


def run_capture(command):
    try:
        return subprocess.run(command, capture_output=True, text=True, check=False)
    except OSError:
        return None


def run_detached(command):
    try:
        subprocess.Popen(
            command,
            cwd=ROOT_DIR,
            stdin=subprocess.DEVNULL,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        return True
    except OSError:
        return False


def is_gnirehtet_running():
    result = run_capture(["tasklist", "/FI", "IMAGENAME eq gnirehtet.exe"])
    if not result:
        return False
    return "gnirehtet.exe" in (result.stdout or "").lower()


def resolve_scrcpy_path():
    direct = shutil.which("scrcpy")
    if direct:
        return direct

    local_tools = os.path.join(ROOT_DIR, "tools", "scrcpy", "scrcpy.exe")
    if os.path.isfile(local_tools):
        return local_tools

    pattern = os.path.join(
        USER_LOCAL_APPDATA,
        "Microsoft",
        "WinGet",
        "Packages",
        "Genymobile.scrcpy_*",
        "scrcpy-win64-v*",
        "scrcpy.exe",
    )
    matches = sorted(glob.glob(pattern), reverse=True)
    for path in matches:
        if os.path.isfile(path):
            return path

    return None


def resolve_adb_path():
    direct = shutil.which("adb")
    if direct:
        return direct

    local_tools = os.path.join(ROOT_DIR, "tools", "platform-tools", "adb.exe")
    if os.path.isfile(local_tools):
        return local_tools

    fallback = os.path.join(
        USER_LOCAL_APPDATA,
        "Android",
        "Sdk",
        "platform-tools",
        "adb.exe",
    )
    if os.path.isfile(fallback):
        return fallback

    android_home = os.environ.get("ANDROID_HOME", "")
    if android_home:
        home_path = os.path.join(android_home, "platform-tools", "adb.exe")
        if os.path.isfile(home_path):
            return home_path

    android_sdk_root = os.environ.get("ANDROID_SDK_ROOT", "")
    if android_sdk_root:
        sdk_root_path = os.path.join(android_sdk_root, "platform-tools", "adb.exe")
        if os.path.isfile(sdk_root_path):
            return sdk_root_path

    return None


def start_notepad_app():
    if os.path.isfile(PYTHONW_EXE):
        return run_detached([PYTHONW_EXE, APP_SCRIPT])

    pythonw = shutil.which("pythonw") or shutil.which("python")
    if not pythonw:
        return False
    return run_detached([pythonw, APP_SCRIPT])


class OtgOnlyLauncher:
    def __init__(self, root):
        self.root = root
        self.root.title("OTG Launcher")
        self.root.geometry("480x210")
        self.root.minsize(480, 210)

        self.status_var = tk.StringVar(value="Ready. Click Start OTG (No Mirror).")

        title = tk.Label(root, text="OTG Only Launcher", font=("Segoe UI", 15, "bold"), anchor="w")
        title.pack(fill="x", padx=14, pady=(14, 8))

        desc = tk.Label(
            root,
            text="Starts my app + ADB + scrcpy. If gnirehtet is running, auto-switches to ADB-compatible mode.",
            anchor="w",
            fg="#4B5563",
        )
        desc.pack(fill="x", padx=14, pady=(0, 12))

        tk.Button(
            root,
            text="Start OTG (No Mirror)",
            command=self.start_otg_only,
            width=34,
            pady=10,
        ).pack(pady=6)

        status = tk.Label(root, textvariable=self.status_var, anchor="w", fg="#1F2937")
        status.pack(fill="x", padx=14, pady=(12, 6))

    def set_status(self, text):
        self.status_var.set(text)

    def start_otg_only(self):
        scrcpy = resolve_scrcpy_path()
        adb = resolve_adb_path()
        if not scrcpy:
            self.set_status("scrcpy not found.")
            return
        if not adb:
            self.set_status("adb not found.")
            return

        if not start_notepad_app():
            self.set_status("Could not start my_keyboard.py.")
            return

        run_capture([adb, "start-server"])
        devices = run_capture([adb, "devices", "-l"])
        if not devices:
            self.set_status("ADB command failed.")
            return

        output = devices.stdout or ""
        if "\tdevice" not in output:
            if "\tunauthorized" in output:
                self.set_status("Device unauthorized. Accept USB debugging prompt on tablet.")
                return
            if "\toffline" in output:
                self.set_status("Device offline. Reconnect USB cable.")
                return
            self.set_status("No authorized device. Unlock tablet and accept USB debugging prompt.")
            return

        if is_gnirehtet_running():
            scrcpy_cmd = [
                scrcpy,
                "--no-window",
                "--no-video",
                "--always-on-top",
                "--window-title",
                "scrcpy-adb-compatible",
            ]
            success_message = "gnirehtet detected. Started ADB-compatible no-mirror mode (no OTG)."
        else:
            scrcpy_cmd = [scrcpy, "--otg", "--no-window", "--always-on-top"]
            success_message = "Started OTG no-mirror mode."

        if run_detached(scrcpy_cmd):
            self.set_status(success_message)
        else:
            self.set_status("Failed to start scrcpy OTG.")


def main():
    root = tk.Tk()
    OtgOnlyLauncher(root)
    root.mainloop()


if __name__ == "__main__":
    main()
