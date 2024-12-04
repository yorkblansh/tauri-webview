#!/bin/bash

SESSION_NAME="PROJECT_X"

# Directory Names
DIR_ONE="./"
DIR_TWO="./"

# Window Names
WINDOW_ONE="auth"
WINDOW_TWO="profile"

#Commands
DEV="yarn admin-api:generate-client" 
CL="clear"

tmux new-session -d -s $SESSION_NAME

# Auth microservice Window
tmux new-window -t $SESSION_NAME:1 -n "auth"
tmux split-window -h
# tmux split-window -v -t 0
tmux send-keys -t $SESSION_NAME:1.2 "$DEV" C-m
# tmux send-keys -t $SESSION_NAME:1.1 "cd $DIR_ONE && $CL" C-m
# tmux send-keys -t $SESSION_NAME:1.2 "cd $DIR_ONE && $CL && $DEV" C-m

# # Profile microservice Window
# tmux new-window -t $SESSION_NAME:2 -n $WINDOW_TWO
# tmux split-window -h
# tmux split-window -v -t 0
# tmux send-keys -t $SESSION_NAME:2.0 "cd $DIR_TWO && $CL" C-m
# tmux send-keys -t $SESSION_NAME:2.1 "cd $DIR_TWO && $CL" C-m
# tmux send-keys -t $SESSION_NAME:2.2 "cd $DIR_TWO && $CL && $DEV" C-m

tmux -u attach -t $SESSION_NAME