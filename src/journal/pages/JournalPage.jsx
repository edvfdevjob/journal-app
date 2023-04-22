import { Typography, IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos odio excepturi voluptas expedita veniam necessitatibus quidem debitis nisi adipisci. Quibusdam quisquam ut illum autem, dolores quo fuga aliquam accusantium?</Typography> */}

      <NothingSelectedView />

      <IconButton size="large" sx={{ color: 'white', backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: .9 }, position: 'fixed', right: 50, bottom: 50 }}>
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
      
      {/* <NoteView /> */}

    </JournalLayout>
   
  )
}
