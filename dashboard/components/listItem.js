import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CourseIcon from "@mui/icons-material/School";
import GalleryIcon from "@mui/icons-material/Collections";
import MaterialsIcon from "@mui/icons-material/AutoStories";
import NotificationIcon from "@mui/icons-material/Campaign";
import FeedbackIcon from "@mui/icons-material/Chat";
import Link from "next/link";

export const mainListItems = (
  <React.Fragment>
    <Link href="/dashboard/courses">
      <ListItemButton>
        <ListItemIcon>
          <CourseIcon />
        </ListItemIcon>
        <ListItemText primary="Courses" />
      </ListItemButton>
    </Link>
    <Link href="/dashboard/studymaterials">
      <ListItemButton>
        <ListItemIcon>
          <MaterialsIcon />
        </ListItemIcon>
        <ListItemText primary="Study Materials" />
      </ListItemButton>
    </Link>
    <Link href="/dashboard/gallery">
      <ListItemButton>
        <ListItemIcon>
          <GalleryIcon />
        </ListItemIcon>
        <ListItemText primary="Gallery" />
      </ListItemButton>
    </Link>
    <Link href="/dashboard/notifications">
      <ListItemButton>
        <ListItemIcon>
          <NotificationIcon />
        </ListItemIcon>
        <ListItemText primary="Notification" />
      </ListItemButton>
    </Link>
    <Link href="/dashboard/feedbacks">
      <ListItemButton>
        <ListItemIcon>
          <FeedbackIcon />
        </ListItemIcon>
        <ListItemText primary="Feedbacks" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
