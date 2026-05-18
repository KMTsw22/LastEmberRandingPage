"""
Resize + convert 122 Arkane idle frames (PNG RGBA, 1272x1628) to WebP at ~480px wide
for landing page hero animation. Total output target: < 8 MB.
"""
import os
from PIL import Image

SRC_DIR = r"c:/Users/mintae/coding/DianoCard/DianoCard/DianoCard/Assets/Resources/Lobby/CharacterAnimation"
OUT_DIR = r"c:/Users/mintae/coding/DianoCard/LandingPage/landing-page/public/images/arkane_idle"
TARGET_W = 480
QUALITY = 78

os.makedirs(OUT_DIR, exist_ok=True)

total = 0
for i in range(1, 123):
    src = os.path.join(SRC_DIR, f"frame_{i:03d}.png")
    if not os.path.exists(src):
        print(f"missing {src}")
        continue
    im = Image.open(src).convert("RGBA")
    w, h = im.size
    new_h = round(h * TARGET_W / w)
    im = im.resize((TARGET_W, new_h), Image.LANCZOS)
    out = os.path.join(OUT_DIR, f"frame_{i:03d}.webp")
    im.save(out, "WEBP", quality=QUALITY, method=6)
    sz = os.path.getsize(out)
    total += sz
    if i == 1 or i % 20 == 0 or i == 122:
        print(f"  {i:03d}: {TARGET_W}x{new_h} -> {sz/1024:.0f} KB")

print(f"done. 122 frames, total {total/1024/1024:.2f} MB")
