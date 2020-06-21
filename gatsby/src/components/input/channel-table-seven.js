import React from "react"

import GlobalContext from "../../contexts/global-context"
import config from "../../config"

const translateChannelName = ch_number => {
  return ch_number == "0" ? "M" : ch_number
}

function ChannelTypeOptionList(props) {
  let { available_opt, selected_opt } = props
  return (
    <>
      {available_opt.map(x => {
        if (x == selected_opt) {
          return (
            <option value={x} selected>
              {x}
            </option>
          )
        } else {
          return <option value={x}>{x}</option>
        }
      })}
    </>
  )
}

function ChannelTypeInput(props) {
  let { available_opt, selected_opt } = props
  if (available_opt.indexOf(selected_opt) > -1) {
    return (
      <>
        <ChannelTypeOptionList {...props} />
      </>
    )
  } else {
    return (
      <>
        <option value="not_selected" selected disabled>
          select channel type
        </option>
        <ChannelTypeOptionList {...props} />
      </>
    )
  }
}

function ChannelInput(props) {
  const { num, channel_type, video_id, video_title } = props
  let global_context = React.useContext(GlobalContext)
  let { combineStyle, checkDataReady } = global_context
  let [canvas, setCanvas] = React.useState(<LoadingCanvas />)

  React.useEffect(() => {
    if (checkDataReady(global_context.active_style)) {
      let { active_style } = global_context

      setCanvas(
        <>
          <td>{num}</td>
          <td>
            <p className={combineStyle([active_style.control])}>
              <span
                className={combineStyle([
                  active_style.select,
                  active_style.isSmall,
                ])}
              >
                <select name="channel_type">
                  <ChannelTypeInput
                    available_opt={config.CHANNEL_TYPE_OPT}
                    selected_opt={channel_type}
                  />
                </select>
              </span>
            </p>
          </td>
          <td>
            <div className={active_style.control}>
              <input
                className={combineStyle([
                  active_style.input,
                  active_style.isSmall,
                ])}
                type="text"
                placeholder="Loading input"
                value={video_id}
                name="video_id"
              />
            </div>
          </td>
          <td>
            <div className={active_style.control}>
              <input
                className={combineStyle([
                  active_style.input,
                  active_style.isSmall,
                ])}
                type="text"
                placeholder="Loading input"
                value={video_title}
                name="video_title"
              />
            </div>
          </td>
        </>
      )
    } else {
    }
  })

  return <>{canvas}</>
}

function LoadingCanvas() {
  return <>loading</>
}

function InputChannelTableSeven() {
  let [canvas, setCanvas] = React.useState(<LoadingCanvas />)
  let global_context = React.useContext(GlobalContext)
  let { checkDataReady, combineStyle } = global_context

  React.useEffect(() => {
    if (
      checkDataReady(global_context.active_style) &&
      checkDataReady(global_context.channel_list)
    ) {
      let { active_style, channel_list } = global_context
      setCanvas(
        <>
          <div
            className={combineStyle([
              active_style.field,
              active_style.isHorizontal,
            ])}
          >
            <div
              className={combineStyle([
                active_style.fieldLabel,
                active_style.isSmall,
              ])}
            >
              <table
                className={combineStyle([
                  active_style.table,
                  active_style.isFullWidth,
                ])}
                style={{ width: "100%" }}
                name="channels"
              >
                <tbody>
                  <tr>
                    <th>#</th>
                    <th>type</th>
                    <th>id</th>
                    <th>title</th>
                  </tr>

                  {Object.keys(channel_list).map(channel_id => {
                    let channel_info = channel_list[channel_id]
                    return (
                      <tr>
                        <ChannelInput
                          channel_type={channel_info.channel_type}
                          video_id={channel_info.video_id}
                          video_title={channel_info.video_title}
                        ></ChannelInput>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )
    } else {
    }
  }, [global_context])

  return <>{canvas}</>
}

export default InputChannelTableSeven
