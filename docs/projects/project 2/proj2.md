# **Project 2: swish - A Simple Command-Line Shell**

## Source
This project was adapted from CSCI 4061 Intro to Operating Systems at the University of Minnesota - Twin Cities [Fall 2024], taught by [**Jack Kolb**](https://cse.umn.edu/cs/jack-kolb).

## 📦 Starter Code
You can download the starter code here:
[proj2-code.zip](proj2-code.zip)

Save the starter code under your `csci4061` directory, which should now look like this:

```
csci4061/
├── labs/
│   ├── lab01-code/
│   └── ...
└── projects/
    └── proj2-code/
```

---

## ✅ How to Succeed on This Project
- **Read the specification thoroughly.** Office hours help may be limited if you haven't.
- **Understand every file in the starter code.** Some helper functions will save you major time.
- **Test independently.** Our tests are not exhaustive; you must write and run manual tests.
- **Expect to get stuck.** Patience and methodical debugging are essential.
- **Start early.** Don’t wait until the deadline pressure mounts.
- **Ask public questions on Piazza.** It helps you and your classmates.
- **Know the late policy.** No submissions are accepted more than 48 hours late.

---

## 🧭 Introduction
Whenever you open a terminal, you're interacting with a **shell process**. This project challenges you to implement a simplified shell called **swish** that can:

- Parse and execute user commands
- Support input/output redirection
- Handle signals like `SIGINT` (Ctrl-C) and `SIGTSTP` (Ctrl-Z)
- Manage foreground and background jobs

You will directly use system calls like `fork()`, `execvp()`, `waitpid()`, `dup2()`, and `sigaction()` to build swish from scratch, gaining a deep understanding of how Unix-like shells work internally.

---

### 📚 Skills You Will Develop
- String parsing using `strtok()`
- Process creation and management (`fork()`, `execvp()`, `waitpid()`)
- Input/output file redirection (`open()`, `dup2()`)
- Signal handling (`sigaction()`, `kill()`, `tcsetpgrp()`)
- Foreground/background job control

---

### 💻 Makefile Commands
```
make                # Compile swish
make clean          # Remove compiled files
make clean-tests    # Remove test outputs
make zip            # Create Gradescope zip
make test           # Run all test cases
make test testnum=5 # Run specific test
```

---

## 🧪 Manual Testing Advice
- Run `swish` manually outside of automated tests.
- Simulate background jobs with `&`.
- Test input/output redirection with `>`, `>>`, `<`.
- Try Ctrl-C and Ctrl-Z to test signal handling.
- Use `jobs`, `fg`, `bg`, `wait-for`, `wait-all` commands interactively.
- Debug issues using `gdb`.

---

## 🧰 Starter Code Files
| File | Purpose | Notes |
|------|---------|-------|
| `Makefile` | Build/tests | Do not modify |
| `string_vector.h` / `string_vector.c` | String token management | Do not modify |
| `job_list.h` / `job_list.c` | Job tracking linked list | Do not modify |
| `swish.c` | Main shell loop | **EDIT THIS** |
| `swish_funcs.h` / `swish_funcs.c` | Shell helper functions | **EDIT THIS** |
| `testius` | Test runner | Do not modify |
| `test_cases/` | Sample inputs | Do not modify |

Only modify files marked as **EDIT**.

---

## 🚀 Shell Features to Implement

### Task 0: String Tokenization
- Complete `tokenize()` function in `swish_funcs.c`.
- Use `strtok()` to split user input into individual tokens.
- Populate a `strvec_t` vector with the tokens.

### Task 1: Working Directory Commands
- Implement `pwd` command using `getcwd()`.
- Implement `cd` command using `chdir()`, defaulting to `$HOME` if no directory provided.
- Print informative errors using `perror()`.

### Task 2: Running External Commands
- In `main()`, `fork()` a child process.
- In child, call `run_command()` to `execvp()` the new program.
- In parent, use `waitpid()` to wait for child to terminate.

### Task 3: Redirecting Input and Output
- Detect `<`, `>`, and `>>` symbols in the tokens.
- Redirect standard input/output to appropriate files using `open()` and `dup2()`.
- Ensure redirection tokens do not get passed to `execvp()`.

### Task 4: Signal Management
- Use `setpgid()` to separate child process groups.
- Use `tcsetpgrp()` to manage foreground process groups.
- Use `sigaction()` to reset signal handling for children.

### Task 5: Managing Stopped Jobs
- Use `waitpid(WUNTRACED)` to detect stopped processes.
- Store stopped jobs in the `jobs` list.
- Implement the `fg` command with `resume_job()`.

### Task 6: Running Background Jobs
- Detect `&` at the end of user input.
- Launch background jobs without calling `tcsetpgrp()` or `waitpid()` immediately.
- Implement `bg` to resume jobs in background.
- Implement `wait-for` and `wait-all` to clean up background jobs.

---

## 🧠 Strategy & Hints
- **Build incrementally.** Test after every major feature.
- **Handle errors explicitly.** Always check system call return values.
- **Reuse helper utilities.** `string_vector` and `job_list` are powerful.
- **Use proper memory cleanup.** Avoid leaks when possible.
- **Get comfortable with signals.** Debugging signal issues is tricky but rewarding.

---

## 📌 Summary
Project 2 will give you firsthand experience building a working shell, combining string processing, system calls, signal handling, and job control. You’ll finish this project with a deep appreciation for systems programming—and a real command-line tool you built from scratch!

---
**Ready to begin? Download the [starter code](proj2-code.zip) and start coding your own shell!**
