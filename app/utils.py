def get_tool_by_name(db, name: str):
    return db.query("Tool").filter_by(name=name).first()

# Add more utility functions as needed
