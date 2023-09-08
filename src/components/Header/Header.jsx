import "./Header.css"
import PersonIcon from "@mui/icons-material/Person"
import { IconButton } from "@mui/material"
import ForumIcon from "@mui/icons-material/Forum"

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="latge" className="header_icon" />
            </IconButton>
            <img className="header_logo" src="react.svg" alt="Logo do react" />
            <IconButton>
                <ForumIcon fontSize="latge" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header