## Start parallel requests
```
ab -n 1000 -c 30 http://localhost:3000/resource
```

## Ping healthcheck
```
watch -n1 curl -XGET localhost:3000/health -i
```

## Send SIGTERM signal
```
kill -15 $(ps | grep node | awk '{print $1}' | head -n1)
ps | grep node | awk '{print $1}' | head -n1 | xargs kill -15
```

## Send SIGKILL signal
```
kill -9 $(ps | grep node | awk '{print $1}' | head -n1)
ps | grep node | awk '{print $1}' | head -n1 | xargs kill -9
```


## MacOS quit process by port
```
lsof -i tcp:3000 | awk '{print $2}' | tail -n1 | xargs kill -9
```

## Signals
```
SIGHUP	1	Hangup (POSIX)
SIGINT	2	Terminal interrupt (ANSI)
SIGQUIT	3	Terminal quit (POSIX)
SIGILL	4	Illegal instruction (ANSI)
SIGTRAP	5	Trace trap (POSIX)
SIGIOT	6	IOT Trap (4.2 BSD)
SIGBUS	7	BUS error (4.2 BSD)
SIGFPE	8	Floating point exception (ANSI)
SIGKILL	9	Kill(can't be caught or ignored) (POSIX)
SIGUSR1	10	User defined signal 1 (POSIX)
SIGSEGV	11	Invalid memory segment access (ANSI)
SIGUSR2	12	User defined signal 2 (POSIX)
SIGPIPE	13	Write on a pipe with no reader, Broken pipe (POSIX)
SIGALRM	14	Alarm clock (POSIX)
SIGTERM	15	Termination (ANSI)
SIGSTKFLT	16	Stack fault
SIGCHLD	17	Child process has stopped or exited, changed (POSIX)
SIGCONTv	18	Continue executing, if stopped (POSIX)
SIGSTOP	19	Stop executing(can't be caught or ignored) (POSIX)
SIGTSTP	20	Terminal stop signal (POSIX)
SIGTTIN	21	Background process trying to read, from TTY (POSIX)
SIGTTOU	22	Background process trying to write, to TTY (POSIX)
SIGURG	23	Urgent condition on socket (4.2 BSD)
SIGXCPU	24	CPU limit exceeded (4.2 BSD)
SIGXFSZ	25	File size limit exceeded (4.2 BSD)
SIGVTALRM	26	Virtual alarm clock (4.2 BSD)
SIGPROF	27	Profiling alarm clock (4.2 BSD)
SIGWINCH	28	Window size change (4.3 BSD, Sun)
SIGIO	29	I/O now possible (4.2 BSD)
SIGPWR	30	Power failure restart (System V)
```

## Build docker image
```
docker build -t gracefull-stop-express:1.0.0 .
```

NOTE: Starting the processs with a npm script is not supported, the signal gets lost before arriving the nodejs process