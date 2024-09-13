import { useState } from "react"
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/resizable';
import 'jquery-ui/themes/base/all.css';
export const FrontPage = () => {
  const [color, Setcolor] = useState('')
  const changeColor = () => {
    Setcolor(document.getElementById('col').value)
  }
  
  const text = () => {
    const col=document.createElement('input')
    col.type="color"
    col.setAttribute('class','color')
    const div = document.createElement('div')
    const del = document.createElement('i')
    const aplay=document.createElement('i')
    aplay.setAttribute('class',"fa-solid fa-check")
    del.setAttribute('class', 'fa-solid fa-trash')
    div.setAttribute("class", "textDiv")
    const newTextEle = document.createElement("p")
    const inpt = document.createElement('input')
    inpt.setAttribute("class", "inpt")
    newTextEle.setAttribute("class", "para")
    document.querySelector(".editor").appendChild(inpt)
    del.addEventListener('click', () => {
      document.querySelector(".editor").removeChild(div)
    })
    inpt.addEventListener('mouseleave', () => {
      newTextEle.textContent = inpt.value
      inpt.style.display = "none"
      div.appendChild(aplay)
      div.appendChild(col)
      div.appendChild(del)
      div.appendChild(newTextEle)
      document.querySelector(".editor").appendChild(div)
      $('.textDiv').draggable({ containment: '#Editor1', scroll: false });
      $(".para").resizable({
        containment: "#Editor1"
      })
    })
    newTextEle.addEventListener('click', () => {
      newTextEle.style.display = "none"
      div.style.display = "none"
      inpt.style.display = "block"
      inpt.addEventListener('mouseleave', () => {
        newTextEle.textContent = inpt.value
        inpt.style.display = "none"
        newTextEle.style.display = "block"
        div.style.display = "block"
        div.appendChild(newTextEle)
        document.querySelector(".editor").appendChild(div)
        $('.textDiv').draggable({ containment: '#Editor1', scroll: false });
        $(".para").resizable({
          containment: ".#Editor"
        })
      })
    })
  //   document.querySelector('.fa-check').addEventListener('click',()=>{
  //     document.querySelector('.para').color=document.querySelector('.color').value
  // })  
  }
  const btn = () => {
    const div = document.createElement('div')
    div.setAttribute("class", "textDiv")
    const del = document.createElement('i')
    del.setAttribute('class', 'fa-solid fa-trash')
    const newTextEle = document.createElement("div")
    const inpt = document.createElement('button')
    newTextEle.setAttribute('id', 'btn_add')
    inpt.textContent = "Click here"
    div.appendChild(del)
    newTextEle.appendChild(inpt)
    div.appendChild(newTextEle)
    document.querySelector(".editor").appendChild(div)
    $('.textDiv').draggable({ containment: '#Editor1', scroll: false });
    del.addEventListener('click', () => {
      document.querySelector(".editor").removeChild(div)
    })
  }

  const img = () => {
    const div = document.createElement('div')
    div.setAttribute("class", "textdiv")
    const del = document.createElement('i')
    del.setAttribute('class', 'fa-solid fa-trash')
    const fileRd = document.createElement('input')
    fileRd.type = "file"
    const imgEle = document.createElement('img')
    imgEle.setAttribute("class", "image")
    document.querySelector(".editor").appendChild(fileRd)
    fileRd.addEventListener('change', () => {
      const imgSrc = fileRd.files[0]
      if (imgSrc) {
        const reader = new FileReader()
        reader.onload = function (e) {
          imgEle.src = e.target.result
        }
        reader.readAsDataURL(imgSrc)
        fileRd.style.display = "none"
        div.appendChild(del)
        div.appendChild(imgEle)
        document.querySelector(".editor").appendChild(div)
        $('.textdiv').draggable({ containment: '#Editor1', scroll: false });
        $(".textdiv").resizable({
          containment: ".editor"
        })
      }
    })
    del.addEventListener('click', () => {
      document.querySelector(".editor").removeChild(div)
    })
  }
  const vid_add = () => {
    const div = document.createElement('div')
    div.setAttribute("class", "textdiv")
    const del = document.createElement('i')
    del.setAttribute('class', 'fa-solid fa-trash')
    const fileRd = document.createElement('input')
    fileRd.type = "file"
    const vidEle = document.createElement("video")
    vidEle.setAttribute('id', "vid")
    document.querySelector(".editor").appendChild(fileRd)
    fileRd.addEventListener('change', () => {
      const vidSrc = fileRd.files[0]
      if (vidSrc) {
        const reader = new FileReader()
        reader.onload = function (e) {
          vidEle.src = e.target.result
        }
        reader.readAsDataURL(vidSrc)
        fileRd.style.display = "none"
        div.appendChild(del)
        div.appendChild(vidEle)
        document.querySelector(".editor").appendChild(div)
        $('#vid').draggable({ containment: '#Editor1', scroll: false });
        del.addEventListener('click', () => {
          document.querySelector(".editor").removeChild(div)
        })
      }
    })
  }


  const preview=()=>{
    const builder= document.querySelector('.builder')
    const pre=document.createElement("div")
    document.querySelector('.header').style.display="none"
    document.querySelector('.design__area').style.display="none"
    pre.classList.add('pre')
    pre.appendChild(builder)
    document.querySelector('.main').appendChild(pre)

      }
  return (
    <div className="main">
      <header className="header">
        <div className="name">
          <i className="fa-solid fa-feather"></i>
          <h1>WebSite Builder</h1>
        </div>
        <button className="preview" onClick={preview}>Preview</button>
      </header>
      <div className="builder">
        <div className="build__area">
          <div className="editor" id="Editor1" style={{ background: color }}>

          </div>
          {/* {$('#Editor1').sortable()} */}
        </div>
        <div className="design__area">
          <h3>Tools</h3>
          <div className="formatting__tools">
            <div className="tool">
              <h4>Text</h4>
              <i onClick={text} className="fa-solid fa-font"></i>
            </div>
            <div className="tool">
              <h4>Image</h4>
              <i onClick={img} className="fa-regular fa-image"></i>
            </div>
            <div className="tool">
              <h4>Button</h4>
              <i onClick={btn} className="fa-solid fa-toggle-on"></i>
            </div>
            <div className="tool">
              <h4>Video</h4>
              <i onClick={vid_add} className="fa-solid fa-file-video"></i>
            </div>
          </div>
          <h3>Colors</h3>
          <div className="templates">
            <input type="color" id="col" />
            <button onClick={changeColor}>SetBackgroundColor</button>
          </div>
        </div>
      </div>
      <div className="prev">

      </div>
    </div>
  )
}