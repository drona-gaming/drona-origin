module.exports = {
  apps: [
    {
      name: 'drona-origin', //Specifies the name of your application process
      script: "./index.js", // Path to your compiled JavaScript entry file
      instances: 1, // Number of instances to run
      exec_mode: "fork", // Execution mode: "cluster" for multiple instances or "fork" for a single instance
      autorestart: true, //Enables automatic restart of the application if it crashes or encounters errors
      watch: true, // Enables PM2 to watch for file changes and automatically reload the application
      ignore_watch: ["node_modules"], // Specify which files/directories to ignore when watching for changes
      max_memory_restart: "250M", // Restart if memory usage exceeds 250 MB per instance
      max_restarts: 3, // Specify the maximum number of restarts PM2 should attempt
      min_uptime: 10000, // Specify the minimum uptime (in milliseconds) that your application must maintain
      restart_delay: 10000, // Specify the delay (in milliseconds) between restarts
    },
  ],
};