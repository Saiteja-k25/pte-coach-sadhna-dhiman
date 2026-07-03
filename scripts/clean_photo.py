"""One-off script: remove the green #OPENTOWORK ribbon from Sadhna's portrait using Gemini Nano Banana."""
import asyncio
import os
import base64
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent

load_dotenv("/app/backend/.env")

INPUT_PATH = "/app/scripts/sadhna_original.jpg"
OUTPUT_PATH = "/app/frontend/public/images/sadhna.png"


async def main():
    with open(INPUT_PATH, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")

    api_key = os.getenv("EMERGENT_LLM_KEY")
    if not api_key:
        raise SystemExit("EMERGENT_LLM_KEY missing")

    chat = LlmChat(
        api_key=api_key,
        session_id="clean-portrait-sadhna",
        system_message="You are an expert photo editor.",
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])

    prompt = (
        "Please edit this portrait photograph and completely REMOVE the green "
        "'#OPENTOWORK' curved ribbon overlay that wraps around the woman (the "
        "large green banner with white text in the lower-left corner and around "
        "her). Restore the natural background — a plain warm cream/white wall "
        "behind her and the beige/grey armchair she is sitting on — as if the "
        "green banner had never been there. Keep the woman's face, hair, navy "
        "blue lace dress, watch, and pose EXACTLY the same. Do not change her "
        "appearance in any way. Output should look like a professional "
        "portrait photograph, clean, natural, no text overlays, no green "
        "elements. High quality, sharp, well-lit."
    )

    msg = UserMessage(text=prompt, file_contents=[ImageContent(image_b64)])
    text, images = await chat.send_message_multimodal_response(msg)
    print("Text response:", (text or "")[:200])

    if not images:
        raise SystemExit("No image returned by model")

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    image_bytes = base64.b64decode(images[0]["data"])
    with open(OUTPUT_PATH, "wb") as f:
        f.write(image_bytes)
    print(f"Saved cleaned image to {OUTPUT_PATH} ({len(image_bytes)} bytes)")


if __name__ == "__main__":
    asyncio.run(main())
