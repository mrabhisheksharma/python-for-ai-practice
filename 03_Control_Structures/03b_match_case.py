# 03b - Match-Case (Python 3.10+)
# Match-case is excellent for routing actions based on intent
intent = "generate_image"

match intent:
    case "entertainment":
        print("Routing to chat model...")
    case "generate_image":
        print("Routing to DALL-E/Midjourney...")
    case "summarize":
        print("Routing to text summarization pipeline...")
    case _:
        print("Routing to default fallback model.")
