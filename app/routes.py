from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from fastapi.responses import HTMLResponse
from . import models, schemas, database
from fastapi.templating import Jinja2Templates

router = APIRouter()
templates = Jinja2Templates(directory="app/templates")

@router.get("/tools", response_class=HTMLResponse)
def read_tools(request: Request, db: Session = Depends(database.get_db)):
    tools = db.query(models.Tool).all()
    return templates.TemplateResponse("tools.html", {"request": request, "tools": tools})

@router.post("/tools", response_model=schemas.Tool)
def create_tool(tool: schemas.ToolCreate, db: Session = Depends(database.get_db)):
    db_tool = models.Tool(name=tool.name, description=tool.description)
    db.add(db_tool)
    db.commit()
    db.refresh(db_tool)
    return db_tool
