import { Box, width } from "@mui/system";
import React from "react";
import BoxItemCountHome from "../../components/common/BoxItemCountHome";
import BadgeIcon from '@mui/icons-material/Badge';
import PieChartDashboard from "../../components/common/PieChartDashboard";
import { Typography } from "@mui/material";
import BarChartDashboard from "../../components/common/BarChartDashboard";

const categorys = [
    {
      label: 'Nike',
      value: 72.72,
    },
    {
      label: 'Adidas',
      value: 16.38,
    },
    {
      label: 'Puma',
      value: 3.83,
    }
  ];

const dataX = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5','Thứ 6', 'Thứ 7', 'CN']
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
                <Box className="box-chart-product">                
                  <Box sx={{ width: '100%', height: '90%'}}>
                    <BarChartDashboard dataX={dataX}/>  
                  </Box>
                  <Typography sx={{ color: "#fff" }}>Thống kê sản phẩm bán chạy trong tuần</Typography>              
                </Box>
                <Box className="box-chart-group">
                    <Box className="box-chart-category">
                      <PieChartDashboard data={categorys}/>                  
                      <Typography sx={{ color: "#fff" }}>Thống kê sản phẩm theo loại</Typography>
                    </Box>
                    <Box className="box-chart-bill">

                    </Box>
                </Box>               
            </Box>       
        </Box>
    )
}

export default Home