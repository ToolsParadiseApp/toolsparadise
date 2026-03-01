"""Pydantic schemas for request/response validation."""

from datetime import datetime
from pydantic import BaseModel, HttpUrl
from typing import Optional


class ToolBase(BaseModel):
    """Base tool schema."""
    
    name: str
    description: Optional[str] = None
    url: Optional[str] = None
    category: Optional[str] = None


class ToolCreate(ToolBase):
    """Schema for creating a tool."""
    pass


class ToolUpdate(BaseModel):
    """Schema for updating a tool."""
    
    name: Optional[str] = None
    description: Optional[str] = None
    url: Optional[str] = None
    category: Optional[str] = None


class Tool(ToolBase):
    """Schema for tool response."""
    
    id: int
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True
