from pydantic import BaseModel

class ToolBase(BaseModel):
    name: str
    description: str

class ToolCreate(ToolBase):
    pass

class Tool(ToolBase):
    id: int

    class Config:
        orm_mode = True
