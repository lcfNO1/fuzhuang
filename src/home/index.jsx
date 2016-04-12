import React,{Component} from 'react'
import {Link} from 'react-router'
import store from 'store'

import Carouse from '../lib/Carouse'
import Image from '../lib/Image'
import Ajax from '../lib/Ajax'
import Tipbar from '../lib/Tipbar'
import Card from '../lib/Card'
import Button from '../lib/Button'

import GoodsList from './lib/GoodsList'
import Header from './lib/Header'
import TitleBar from './lib/TitleBar'
import Footer from './lib/Footer'
import MenuBar from './lib/MenuBar'


class NoticePanel extends Component{
	render(){
		return (
			<Card full>
				<p style={{fontSize:20,textAlign:"center"}}>公告</p>
				<ul style={{fontSize:12,margin:"1em 0 0 1em",lineHeight:"20px",color:"#555"}}>
					<Link to="#"><li>「美丽说」一键上传功能上线</li></Link>
					<Link to="#"><li>广告服务介绍「档口篇」</li></Link>
					<Link to="#"><li>新手指引「买手篇」</li></Link>
					<Link to="#"><li>新手指引「档口篇」</li></Link>
					<Link to="#"><li>联系我们</li></Link>
				</ul>
			</Card>
		)
	}
}

class UserPanel extends Component{
	constructor(props){
		super(props)
		var tt
		var t=new Date().getHours()
		if(t>6&&t<=9){
			tt="早上"
		}else if(t>9&&t<=11){
			tt="上午"
		}else if(t>11&&t<=12){
			tt="中午"
		}else if(t>12&&t<=19){
			tt="下午"
		}else{
			tt="晚上"
		}
		this.state={tt,user:null}
	}
	logout(){
		store.remove('token')
		location.reload()
	}
	render(){
		return (
			<Card full color="red" style={{textAlign:"center",marginBottom:"1em"}}>
				<p style={{fontSize:20}}>Hi， {this.state.user?(this.state.user.nickname||this.state.user.account):(this.state.tt+"好")}</p>
				<p style={{color:"#AAA",fontSize:15,margin:20}}>欢迎来到第壹印象</p>
				{
					this.state.user?(
						<div>
							<Link to="/user.html">
								<Button color="red">用户中心</Button>
							</Link>
							<Button style={{marginRight:0}} color="default" onClick={()=>this.logout()}>注销</Button>
						</div>
					):(
						<div>
							<Link to="/login.html">
								<Button color="red">登录</Button>
							</Link>
							<Link to="/register.html">
								<Button color="red" style={{marginRight:0}}>注册</Button>
							</Link>
						</div>
					)
				}
				<Ajax auto={store.get("token")!=null} url={"/users/info?token="+store.get("token")} onSuccess={user=>this.setState({user:user})} />
			</Card>
		)
	}
}


class ItemList extends Component{
	render(){
		return(
			<div style={{width:1200,margin:"0 auto"}}>
				<Tipbar color="red" title={this.props.title} />
				<div style={{width:1220}}>{this.props.children}</div>
				<div style={{clear:"both"}}></div>
			</div>
		)
	}
}

class InfoBar extends Component {
	state={imgs1:[],imgs2:[]}
	render(){
		return (
			<div style={{width:1200,margin:"0 auto 20px auto",paddingLeft:180}}>
				<div style={{display:"inline-block",verticalAlign:"top",width:780,height:370,padding:"20px 0 0 20px"}}>
					<Carouse style={{height:350,width:760}} button list>
						{(this.state.imgs1||[]).map(it=>{
							return <Image full src={it.path} />
						})}
					</Carouse>
				</div>
				<div style={{display:"inline-block",width:240,padding:"20px 0 0 20px"}}>
						<UserPanel />
						<NoticePanel />
				</div>
				<div style={{width:240,padding:"20px 0 0 20px"}}>
					<Carouse style={{height:160,width:1000}} button total={5} speed={2000}>
						{(this.state.imgs2||[]).map(it=>{
							return <Image full src={it.path} />
						})}
					</Carouse>
				</div>
				<Ajax ref="config" auto url={"/configs/index"} onSuccess={it=>this.setState({imgs1:it.imgs1,imgs2:it.imgs2})} />
			</div>
		)
	}
}

export default class extends Component{
	render(){
		return (
			<div>
				<Header />
				<TitleBar />
				<MenuBar active />
				<InfoBar />
				<ItemList title="潮流单品">
					<GoodsList url="/goods?limit=5" />
				</ItemList>
				<ItemList title="当季促销">
					<GoodsList url="/goods?limit=5&sort=price,+" />
				</ItemList>
				<ItemList title="每日新款">
					<GoodsList url="/goods?limit=5&sort=createTime,-" />
				</ItemList>
				<Footer />
			</div>
		)
	}	
}

