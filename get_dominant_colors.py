from pathlib import Path

from imagedominantcolor import DominantColor

IMAGE_EXTENSIONS: list[str] = [".jpg", ".jpeg", ".png"]


for image_path in sorted(Path("assets").rglob("*")):
    if image_path.suffix.lower() in IMAGE_EXTENSIONS:
        dominant_color = DominantColor(str(image_path))
        print(f"{image_path.name}: {dominant_color.rgb} / {"#%02x%02x%02x" % (dominant_color.r, dominant_color.g, dominant_color.b)}")
