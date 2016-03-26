import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Box,MenuPanel} from './'

class DataTable extends Component{
	render(){
		return(
			<div {...this.props}>
				2333
			</div>
		)
	}
} 

export default class extends Component{
	render(){
		return(
			<Box title="订单管理">
				<MenuPanel>
					<DataTable title="等待发货订单" />
					<DataTable title="已发货的订单" />
					<DataTable title="被取消的订单" />
				</MenuPanel>
			</Box>
		)
	}
}