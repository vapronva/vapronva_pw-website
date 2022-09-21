from typing import Union
from flask import Flask, render_template, redirect
import os

app = Flask(
    "vapronva_pw-website",
    template_folder="templates/",
    static_folder="assets/",
    static_url_path="/_/assets",
)


def check_arguments(returnVersionValue: bool = False) -> Union[str, None]:
    if not os.environ.get("VERSION"):
        raise ValueError("VERSION not set")
    if returnVersionValue:
        return os.environ.get("VERSION")


VERSION = check_arguments(True)


@app.route("/")
def main_root():
    return render_template("index.html", VERSION=VERSION)


@app.route("/index.html")
def main_index():
    return redirect("/")


if __name__ == "__main__":
    check_arguments()
    app.run(
        host="0.0.0.0",  # skipcq: BAN-B104
        port=8080,
        debug=False,
        threaded=True,
        use_reloader=False,
    )
