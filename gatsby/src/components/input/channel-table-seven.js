import React from 'react'

import GlobalContext from '../../contexts/global-context'
import config from '../../config'

const translateChannelName = (ch_number) => {
  return ch_number == '0' ? 'M' : ch_number
}

function ChannelTypeOptionList(props){
  let {available_opt, selected_opt} = props
  return(
    <>
      {
        available_opt.map(x => {
          if (x == selected_opt){
            return (
              <option selected>{x}</option>
            )
          }else{
            return (
              <option >{x}</option>
            )
          }
        })
      }
    </>
  )
}

function ChannelTypeInput(props){
  let {available_opt, selected_opt} = props
  if (available_opt.indexOf(selected_opt) > -1){
    return(
      <>
        <select>
          <ChannelTypeOptionList {...props} />
        </select>
      </>
    )
  }else{
    return(
      <>
        <select>
          <option selected disabled>select channel type</option>
          <ChannelTypeOptionList {...props} />
        </select>
      </>
    )
  }

}


function ChannelInput(props){
  const {num, channel_type, video_id, video_title} = props
  const {active_style, combineStyle} = React.useContext(GlobalContext)

  return(
    <>
      <td>
        {num}
      </td>
      <td>
        {/* {ch_type} */}
        <p className={combineStyle([active_style.control])}>
          <span className={combineStyle([active_style.select, active_style.isSmall])}>
            <ChannelTypeInput
              available_opt={config.CHANNEL_TYPE_OPT}
              selected_opt={channel_type}
            />
          </span>
          {/* <span className={combineStyle([active_style.icon, active_style.isSmall, active_style.isLeft])}>
            <i className="fas fa-globe" />
          </span> */}
        </p>
      </td>
      <td>
        <div className={active_style.control}>
          <input className={combineStyle([
            active_style.input, active_style.isSmall
          ])} type="text" placeholder="Loading input" value={video_id}/>
        </div>
      </td>
      <td>
        <div className={active_style.control}>
          <input className={combineStyle([
            active_style.input, active_style.isSmall
          ])} type="text" placeholder="Loading input" value={video_title}/>
        </div>
      </td>
    </>
  )
}

function InputChannelTableSeven(){
  const {active_style, combineStyle, channel_list} = React.useContext(GlobalContext)
  return(
    <>
      <div className={combineStyle([
        active_style.field, active_style.isHorizontal
      ])}>
        <div className={combineStyle([
          active_style.fieldLabel, active_style.isSmall
        ])}>
          <table className={combineStyle([
            active_style.table, active_style.isFullWidth
          ])} style={{width:'100%'}}>
            <tbody>
              <tr>
                <th>#</th>
                <th>type</th>
                <th>id</th>
                <th>title</th>
              </tr>

              {
                Object.keys(channel_list).map( channel_id => {
                  let channel_info = channel_list[channel_id]
                  return(
                    <tr>
                      <ChannelInput
                        num={translateChannelName(channel_id)}
                        channel_type={channel_info.channel_type}
                        video_id={channel_info.video_id}
                        video_title={channel_info.video_title}
                        />
                    </tr>
                  )
                } )
              }

            </tbody>



          </table>
        </div>
      </div>
    </>
  )
}

export default InputChannelTableSeven