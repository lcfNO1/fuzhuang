import React,{Component} from "react"
import Radium from 'radium'
import Icon from '../lib/Icon'

export function getIcon(type,sec){
	var ico=<Icon name="file-o" />
	if(type=="folder")
		ico=sec?<Icon name="folder-open-o" />:<Icon name="folder-o" />
	if(type.match(/image/))
		ico=<Icon name="file-image-o" />
	return ico
}

@Radium
class TreeNode extends Component{
	static propTypes ={
		name:React.PropTypes.string,
		type:React.PropTypes.string,
		active:React.PropTypes.bool,
		onClick:React.PropTypes.func
	}
	state={isOpen:true}
	render(){
		var ico=getIcon(this.props.type,this.state.isOpen)
		return (
			<div style={this.props.style}>
				{this.props.children&&(
					<span style={{fontSize:"0.7em",marginLeft:-16,cursor:"pointer",whiteSpace:"nowrap"}}
						onClick={()=>this.setState({isOpen:!this.state.isOpen})} >
						{this.state.isOpen?<Icon name="minus" />:<Icon name="plus" />}
					</span>
				)}
				<span style={[
					{cursor:"pointer",padding:"2px 5px",lineHeight:1.5,userSelect:"none",whiteSpace:"nowrap"},
					this.props.active?{background:"#FFE6B0",border:"1px solid #FFB951"}:{border:"1px solid transparent"}
				]} draggable onDragStart={e=>e.dataTransfer.setData("Text",this.props.id)} onClick={this.props.onClick}>
					{ico}
					{this.props.name}
				</span>
				{this.props.children&&(
					<div style={!this.state.isOpen?{display:"none"}:{}}>{this.props.children}</div>
				)}
			</div>
		)
	}
}

export class InlineTree extends Component{
	static propTypes ={
		selected:React.PropTypes.string,
		onSelect:React.PropTypes.func,
		data:React.PropTypes.array.isRequired
	}
	render(){
		var {selected,data}=this.props
		var res=[]
		for(let it=data.find(b=>b.key==selected);it;it=data.find(b=>b.key==it.parent)){
			res.unshift(
				<TreeNode active={selected==it.key} {...it} id={it.key}
					style={{display:"inline",margin:"0 10px"}}
					onClick={this.props.onSelect&&(()=>this.props.onSelect(it.key))} />
			)
			res.unshift(">")
		}
		res.shift()
		return <span>{res}</span>
	}
}

export class Tree extends Component{
	static propTypes ={
		selected:React.PropTypes.string,
		onSelect:React.PropTypes.func,
		data:React.PropTypes.array
	}
	state={selected:null}
	recur(data,parent){
		var res=[]
		var selected=this.props.onSelect?this.props.selected:this.state.selected
		return data.filter(it=>it.parent==parent).map(it=>(
			<TreeNode active={selected==it.key} {...it} style={{marginLeft:20}} id={it.key}
				onClick={()=>{
					this.setState({selected:it.key})
					this.props.onSelect&&this.props.onSelect(it.key)
				}} >
				{it.type=="folder"&&this.recur(data,it.key)}
			</TreeNode>
		))
	}
	render(){
		//var data=[{key:null,name:"root",type:"folder",parent:"root"},{key:1,name:"test1",parent:null,type:"folder"},{key:2,name:"test2",parent:1,type:"folder"},{key:3,name:"test3",parent:4,type:"image/jpeg"},{key:4,name:"test4",parent:null,type:"folder"}]
		return <div>{this.recur(this.props.data||[],"root")}</div>
	}
}