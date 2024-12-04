# tmux new-session -d -s PROJECT_X -n auth
# tmux new-window -t PROJECT_X -n service
# tmux new-window -t PROJECT_X -n scripts

# tmux send-keys -t PROJECT_X:scripts "yarn admin-api:generate-client" C-m
curl https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install | fish