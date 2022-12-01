#!/bin/bash

(trap 'kill 0' SIGINT; nodemon server/index.js & parcel watch client/index.html & wait)
