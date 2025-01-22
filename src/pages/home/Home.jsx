import { Box } from "@mui/system";
import React from "react";
import BoxItemCountHome from "../../components/common/BoxItemCountHome";
import BadgeIcon from '@mui/icons-material/Badge';

function Home() {
    return (
        <Box className="box-main-home">
            <Box className="box-chart-count-home">
                <BoxItemCountHome icon={<BadgeIcon sx={{ backgroundColor: "#AEB9E1" }}/>} title={"Tổng danh mục"} value={"4"} isIncrease={true} percentValue={"20%"}/>
                <BoxItemCountHome icon={<BadgeIcon sx={{ backgroundColor: "#AEB9E1" }}/>} title={"Tổng sản phẩm"} value={"55"} isIncrease={true} percentValue={"44,2%"}/>
                <BoxItemCountHome icon={<BadgeIcon sx={{ backgroundColor: "#AEB9E1" }}/>} title={"Tổng đơn hàng"} value={"18"} isIncrease={false} percentValue={"14,2%"}/>
                <BoxItemCountHome icon={<BadgeIcon sx={{ backgroundColor: "#AEB9E1" }}/>} title={"Tổng người truy cập"} value={"22"} isIncrease={false} percentValue={"4,2%"}/>
            </Box>
            <Box className="box-chart-home">
                <Box>
                    
                </Box>
            </Box>       
        </Box>
    )
}

export default Home