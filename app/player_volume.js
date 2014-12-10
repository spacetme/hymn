
import Pumper from "lib/pumper/pumper"
import { onChange } from "lib/pumper/pumper"

export default class PlayerVolumeControl extends Pumper {

  constructor(application) {
    super.constructor()
    for (let i = 0; i < 4; i ++) this.bindVoice(i, application.player)
    application.on('options', options => this.push(application.options))
    this.push(application.options)
  }

  bindVoice(channel, player) {
    this.bind(
      options => {
        let focus = options.channel === channel
        if (options.mode == 'practice') {
          return focus ? 0 : 0.2
        } else {
          return focus ? 0.5 : 0.1
        }
      },
      onChange(volume => player.voice(channel).volume = volume)
    )
  }

}
