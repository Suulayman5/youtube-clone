import {Link} from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia} from '@mui/material'
import { CheckCricle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitile }  from '../utils/contants'

const VideoCard = ({video: {id: {videoId}, snippet} }) => {
  return (
    <Card>
        <Link>
            <CardMedia/>
        </Link>
    </Card>
  )
}

export default VideoCard