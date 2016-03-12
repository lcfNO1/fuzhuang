import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'
import Color from 'color'
var colors={
	bg:Color().rgb(246,246,246).hexString(),
	primary:Color().rgb(200,22,36).hexString(),
	secondary:Color().rgb(200,22,36).darken(0.2).hexString(),
	line:"#DDD"
}

class Head extends Component{
	render(){
		return (
			<div style={{background:colors.bg,borderBottom:"1px solid #CCC"}}>
				<div style={{width:1200,height:30,margin:"0 auto",lineHeight:"30px",fontSize:14}}>
					<p>
						<span style={{color:colors.primary}}>欢迎光临郑州第一印象网络服装批发平台</span>
					</p>
				</div>
			</div>
		)
	}
}

@Radium
class Search extends Component{
	render(){
		return(
			<div style={[{width:600,height:40,border:"3px solid"+colors.primary,display:"inline-block"},this.props.style]}>
				<div style={{display:"inline-block",width:100,height:"100%",verticalAlign:"middle"}}></div>
				<input style={{display:"inline",width:400,height:40,verticalAlign:"middle",border:"none"}}></input>
				<button style={{display:"inline",width:100,height:40,verticalAlign:"middle",border:"none",background:colors.primary,color:"#fff",fontHeight:"bolder",fontSize:20}}>搜索</button>
			</div>
		)
	}
}

class LogoBar extends Component{
	render(){
		return (
			<div style={{background:colors.bg}}>
				<div style={{width:1200,height:110,margin:"0 auto"}}>
					<span style={{height:"100%",display:"inline-block",verticalAlign:"middle"}}></span>
					<img style={{verticalAlign:"middle"}} src={require("./logo.gif")} />
					<Search style={{verticalAlign:"middle",margin:"0 120px"}} />
				</div>
			</div>
		)
	}
}

@Radium
class MenuBar extends Component{
	render(){
		return (
			<div style={{background:colors.primary}}>
				<ul style={{width:1200,height:35,margin:"0 auto"}}>
					<li style={{width:180,textAlign:"center",float:"left",listStyle:"none",fontWeight:"bold",lineHeight:"35px",color:"#fff",fontSize:16,background:colors.secondary}} >所有商品分类</li>
					{["网站首页","批发市场","每日新款","款式搜索"].map(it=>{
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
			<ul style={{width:178,height:549,display:"inline-block",background:colors.bg,border:"1px solid "+colors.line,borderTop:"none"}}>
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

class Carouse extends Component{
	render(){
		return (
			<div style={{height:350,marginBottom:20,background:colors.bg}}></div>
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
class Reveal extends Component{
	render(){
		return (
			<div style={{display:"inline-block",width:760,height:530,margin:"20px 0 0 20px"}}>
				<Carouse />
				<Carouse2 />
			</div>
		)
	}
}

class InfoPanel extends Component{
	render(){
		return (
			<div style={{display:"inline-block",width:218,height:528,margin:"20px 0 0 20px",border:"1px solid "+colors.line}}></div>
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

class ItemPanel extends Component{
	render(){
		return (
			<div style={{float:"left",width:224,margin:"0 20px 20px 0",height:300,background:colors.bg}}></div>
		)
	}
}

class MainBar extends Component{
	render(){
		return (
			<div style={{width:1200,margin:"0 auto",paddingBottom:20}}>
				<MenuLeft />
				<Reveal />
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
					{(this.props.data||[]).map(it=>{
						return <ItemPanel />
					})}
				</div>
				<div style={{clear:"both"}}></div>
			</div>
		)
	}
}


class Footer extends Component{
	render(){
		return(
			<div style={{marginTop:20,background:colors.bg,height:200,borderTop:"1px solid "+colors.line}}></div>
		)
	}
}
class App extends Component{
	render(){
		return (
			<div>
				<style>{"*{margin:0px;padding:0px}body{font-family:'Microsoft Yahei' !important}a{text-decoration:none}"}</style>
				<Head />
				<LogoBar />
				<MenuBar />
				<MainBar />
				<ItemList title="潮流单品" data={[1,2,3,4,5,6,7,8,9,0]} />
				<ItemList title="当季热销" data={[1,2,3,4,5,6,7,8,9,0]} />
				<Footer />
			</div>
		)
	}
}
ReactDOM.render(<App />,document.getElementById('app'))
