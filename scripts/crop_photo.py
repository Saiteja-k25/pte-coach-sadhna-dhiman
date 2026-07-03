"""Fallback: crop out the green #OPENTOWORK ribbon manually since Nano Banana is unavailable."""
from PIL import Image, ImageFilter

INPUT = "/app/scripts/sadhna_original.jpg"
OUTPUT = "/app/frontend/public/images/sadhna.png"

img = Image.open(INPUT).convert("RGB")
# Original is 400x400. Green ribbon lives in the left edge, bottom, and slight right wash.
# Crop tight around face + shoulders to eliminate the ribbon area.
# left, top, right, bottom
cropped = img.crop((110, 10, 385, 265))
# Upscale to a nicer resolution for the site
cropped = cropped.resize((825, 765), Image.LANCZOS)
cropped.save(OUTPUT, "PNG", quality=95)
print("Saved:", OUTPUT, cropped.size)
