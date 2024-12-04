import { $ } from 'bun'

const servicesSessionName = 'LK-SERVICES'
const scriptsWindowName = 'SCRIPTS'

await $`tmux new-session -d -s ${servicesSessionName} -n ${scriptsWindowName}`

await $`tmux send -t ${servicesSessionName}:${scriptsWindowName} "npm run admin-api:generate-client" C-m`

// await $`tmux new-window -t ${servicesSessionName} -n service`
// await $`tmux new-window -t ${servicesSessionName} -n scripts`

// await $`tmux new-session -d -s FRONTEND -n auth`

// await $`wget https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install | fish`
// await $`tmux new-window -t PROJECT_X:1`
// await $`tmux split-window -h`
// await $`tmux send-keys -t PROJECT_X:1 "yarn admin-api:generate-client" C-m`

// const tmuxInnerCommands = [
// 	// `yarn run admin-api:generate-client`,
// 	// `tmux rename-window -t autoloaded scripts-done`,
// 	// `pwd; fish`,
// 	// `tmux a -t L -n autoloaded1`,
// 	`tmux split-window -h; fish`,
// ].join('; ')

// // const sec = `tmux a -t L -n autoloaded1 "yarn run admin-api:generate-client; tmux rename-window -t autoloaded1 scripts-done; fish"`

// await $`pwd && tmux start-server && tmux new-session -d -s L -n autoloaded "${tmuxInnerCommands}";`
// console.log(1111)

// // await $`tmux attach-session -t L; fish;tmux new-window -n Win2;`

// console.log(222)

// "tmux select-pane -t autoload; tmux split-window; fish";`

// await $`tmux new-session -s L -n autoloaded1 "${tmuxInnerCommands}"; fish`
// await $`tmux a -t L -n autoloaded1 "yarn run admin-api:generate-client; tmux rename-window -t autoloaded1 scripts-done; fish"`
// await $`tmux a -t L && yarn run admin-api:generate-client`
// await $`tmux split-window -t L:0 "/usr/bin/env sh -c yarn run admin-api:build && yarn run admin-api:start:prod"`
