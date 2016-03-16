import React,{Component} from 'react'
import Radium from 'radium'
import {VelocityComponent,velocityHelpers} from 'velocity-react'
import {colors} from './main';
@Radium
class MenuBar extends Component{
	render(){
		return (
			<div style={{background:colors.primary}}>
				<ul style={{width:1200,height:35,margin:"0 auto"}}>
					<li style={{width:180,textAlign:"center",float:"left",listStyle:"none",fontWeight:"bold",lineHeight:"35px",color:"#fff",fontSize:16,background:colors.secondary}} >所有商品分类</li>
					{(this.props.data||[]).map(it=>{
						return (
							<li key={it} style={{height:35,float:"left",listStyle:"none",":hover":{background:colors.secondary}}} >
								<a style={{fontWeight:"bold",float:"left",lineHeight:"35px",color:"#fff",padding:"0px 15px",fontSize:16}} href={"/target/"+it}>{it}</a>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

@Radium
class MenuLeft extends Component{
	render(){
		return (
			<ul style={{width:178,height:549,display:"inline-block",background:colors.bg,borderLeft:"1px solid "+colors.line,borderRight:"1px solid "+colors.line,borderBottom:"1px solid "+colors.line}}>
				{
					["精品男装","淘款市场","国际名流","意法男装","中纺服饰","一号基地","二号基地","男衬衫","品牌折扣","外贸原单","三号基地","更多市场"].map(ii=>{
						return (
							<li key={ii} style={{margin:"10px 0",height:35,listStyle:"none"}}>
								<a key={ii+".child"} style={{textAlign:"center",fontWeight:"normal",width:"100%",lineHeight:"35px",float:"left",color:"#000",":hover":{color:colors.primary},fontSize:16}} href={"/target/"+ii}>{ii}</a>
							</li>
						)
					})
				}
			</ul>
		)
	}
}


class InfoPanel extends Component{
	render(){
		return (
			<div style={{display:"inline-block",verticalAlign:"top",width:218,height:528,margin:"20px 0 0 20px",border:"1px solid "+colors.line}}>
				<div style={{height:100,lineHeight:"100px",textAlign:"center",color:"#444"}}>
				
				</div>
				<div style={{height:40,background:colors.bg,borderTop:"1px solid "+colors.line,borderBottom:"1px solid "+colors.line}}>
					<a href="#" style={{color:"#444",display:"inline-block",width:108,height:"100%",borderRight:"1px solid "+colors.line,lineHeight:"40px",textAlign:"center"}}>登录</a>
					<a href="#" style={{color:"#444",display:"inline-block",width:109,lineHeight:"40px",textAlign:"center"}}>注册</a>
				</div>
			</div>
		)
	}
}
class TitleBar extends Component{
	render(){
		return (
			<div style={{borderBottom:"2px solid "+colors.primary,marginBottom:20}}>
				<strong style={{display:"inline-block",padding:"0 20px",height:23,background:colors.primary,lineHeight:"23px",fontSize:14,color:"#fff",textAlign:"center"}}>{this.props.title||"#"}</strong>
			</div>
		)
	}
}
@Radium
class ItemPanel extends Component{
	render(){
		return (
			<div style={{padding:10,float:"left",width:202,margin:"0 20px 20px 0",height:270,border:"1px solid "+colors.line}}>
				<p style={{marginBottom:10,height:200,position:"relative"}}>
					<a href="#" style={{height:"100%"}}>
						<img src={this.props.img} style={{maxWidth:"100%",maxHeight:"100%",position:"absolute",top:0,bottom:0,margin:"auto"}}/>
					</a>
				</p>
				<a href="#" style={{color:"#555",":hover":{color:colors.primary}}}>
					<p style={{height:38,overflow:"hidden",textOverflow:"ellipsis"}}>{this.props.text}</p>
				</a>
				<p style={{height:20,overflow:"hidden",textOverflow:"ellipsis",color:colors.primary}}>
					<b>￥</b>
					<span>{this.props.price}</span>
				</p>
			</div>
		)
	}
}
@Radium
class Carouse extends Component{
	constructor(props){
		super(props)
		this.state={index:0}
		this.start()
	}
	componentWillUnmount(){
		this.stop()
	}
	start(){
		this.t=setInterval(()=>{
			if(Radium.getState(this.state,'box',':hover'))return
			this.next()
		},5000)
	}
	stop(){
		clearInterval(this.t)
	}
	next(){
		this.stop()
		this.setState({index:this.state.index+2>this.props.data.length?0:this.state.index+1})
		this.start()
	}
	pre(){
		this.stop()
		this.setState({index:this.state.index<1?this.props.data.length-1:this.state.index-1})
		this.start()
	}
	render(){
		return (
			<div ref="box"  style={{":hover":{},height:350,marginBottom:20,position:"relative",overflow:"hidden"}}>
				<VelocityComponent animation={{marginLeft:-760*this.state.index}} duration={1000}>
					<ul style={{width:760*(this.props.data.length+1),height:"100%",listStyle:"none"}}>
						{this.props.data.map((it,i)=>{
							return (		
								<a href="#">
									<li style={{display:"inline-block",width:760,height:"100%"}}>
										<img src={require("./logo.png")} style={{width:"100%",height:"100%"}} />
									</li>
								</a>
							)
						})}
					</ul>
				</VelocityComponent>
				<svg key="left" onClick={()=>this.pre()} style={{fill:"#fff",":hover":{fill:colors.primary},display:Radium.getState(this.state,'box',':hover')?"block":"none",cursor:"pointer",padding:10,position:"absolute",top:0,bottom:0,margin:"auto",width:50,height:50}} viewBox="0 0 16 16">
					<path d="M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5z"></path>
					<path d="M10.457 4.957l-1.414-1.414-4.457 4.457 4.457 4.457 1.414-1.414-3.043-3.043z"></path>
				</svg>
				<svg key="right" onClick={()=>this.next()} style={{fill:"#fff",":hover":{fill:colors.primary},display:Radium.getState(this.state,'box',':hover')?"block":"none",cursor:"pointer",padding:10,position:"absolute",right:0,top:0,bottom:0,margin:"auto",width:50,height:50}} viewBox="0 0 16 16">
					<path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"></path>
					<path d="M5.543 11.043l1.414 1.414 4.457-4.457-4.457-4.457-1.414 1.414 3.043 3.043z"></path>
				</svg>
				<ul style={{listStyle:"none",position:"absolute",bottom:20,right:20}}>
					{this.props.data.map((it,i)=>{
						return <li key={"item"+i} onClick={()=>this.setState({index:i})} style={{cursor:"pointer",width:18,height:18,border:"1px solid #fff",margin:"0 5px",borderRadius:10,display:"inline-block",background:this.state.index==i?colors.primary:"rgba(200,200,200,0.3)",":hover":this.state.index==i?{}:{background:"rgba(200,200,200,0.6)"}}}></li>
					})}
				</ul>
			</div>
		)
	}
}
class Carouse2 extends Component{
	render(){
		return (
			<div style={{height:160,background:colors.bg}}></div>
		)
	}
}
class MainBar extends Component{
	render(){
		return (
			<div style={{width:1200,margin:"0 auto",paddingBottom:20}}>
				<MenuLeft />
				<div style={{display:"inline-block",verticalAlign:"top",width:760,height:530,margin:"20px 0 0 20px"}}>
					<Carouse data={[1,2,3,4,5]} />
					<Carouse2 />
				</div>
				<InfoPanel />
			</div>
		)
	}
}

@Radium
class ItemList extends Component{
	render(){
		return(
			<div style={{width:1200,margin:"0 auto"}}>
				<TitleBar title={this.props.title} />
				<div style={{width:1220}}>
					{(this.props.data||[]).map((it,index)=>{
						return <ItemPanel key={index} {...it} />
					})}
				</div>
				<div style={{clear:"both"}}></div>
			</div>
		)
	}
}


var z={img:require("./logo.png"),text:"潮流单品",price:300}
export default class extends Component{
	render(){
		return (
			<div>
				<MenuBar data={["网站首页","批发市场","每日新款","款式搜索"]} />
				<MainBar />
				<ItemList title="潮流单品" data={[z,z,z,z,z,z,z,z,z,z]} />
				<ItemList title="潮流单品" data={[z,z,z,z,z,z,z,z,z,z]} />
			</div>
		)
	}	
}
