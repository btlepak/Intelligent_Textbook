# **Project 3: Pipes and Pipelines - Parallel Letter Counting and Shell Pipelining**

## Source
This project was adapted from CSCI 4061 Intro to Operating Systems at the University of Minnesota - Twin Cities [Fall 2024], taught by [**Jack Kolb**](https://cse.umn.edu/cs/jack-kolb).

## 📦 Starter Code
You can download the starter code here:
[proj3-code.zip](proj3-code.zip)

Save the starter code under your `csci4061` directory, which should now look like this:

```
csci4061/
├── labs/
│   └── ...
└── projects/
    └── proj3-code/
        ├── part1/
        └── part2/
```

---

## ✅ How to Succeed on This Project
- **Read the full specification carefully.** Understanding the project fully before starting will save time.
- **Understand the starter code and file purposes.** Many helper functions are already provided.
- **Test independently.** The provided tests are not exhaustive.
- **Expect bugs and confusion.** Stay patient and methodical.
- **Start early.** Systems code takes longer than you think.
- **Ask public Piazza questions.** It benefits everyone.
- **Know the late policy.** No submissions accepted more than 48 hours late.

---

## 🧭 Introduction
In this two-part project, you will practice inter-process communication using **pipes**.

- **Part 1:** Build a parallel letter-counting system, where each file is processed by a different child process communicating results through a shared pipe.
- **Part 2:** Extend your `swish` shell to support **command pipelines** (`|`), linking programs together using pipes.

You will:
- Practice file I/O and parsing.
- Learn how to coordinate processes via pipes.
- Understand input/output redirection with `dup2()`.
- Build a real multi-process pipeline like Unix shells.

---

### 📚 Skills You Will Develop
- Text file parsing
- Creating and managing pipes
- Using `read()` and `write()` system calls
- Forking and redirecting standard input/output
- Managing multiple processes concurrently

---

### 💻 Makefile Commands

At the top-level `proj3-code/`:
```
make            # Compile all code for both parts
make clean      # Clean builds for both parts
make clean-tests# Remove test artifacts
make test-part1 # Run Part 1 tests
make test-part2 # Run Part 2 tests
make zip        # Create Gradescope zip
```

Within `part1/` or `part2/` subdirectories:
```
make                # Compile code
make clean          # Remove compiled files
make clean-tests    # Remove test outputs
make test           # Run all tests
make test testnum=5 # Run a specific test
```

---

## 🧪 Manual Testing Advice
- Validate that multiple files are processed in parallel.
- Check that child processes write independently to the pipe.
- Validate that command pipelines work with multiple programs.
- Manually test redirection cases (input/output/appending).
- Debug using `gdb`, especially for stuck pipes or processes.

---

## 🧰 Starter Code Files

### Part 1
| File | Purpose | Notes |
|------|---------|-------|
| `Makefile` | Build/tests | Do not modify |
| `par_letter_counts.c` | Parallel letter counting | **EDIT THIS** |
| `testius` | Test runner | Do not modify |
| `test_cases/` | Sample test files | Do not modify |

### Part 2
| File | Purpose | Notes |
|------|---------|-------|
| `Makefile` | Build/tests | Do not modify |
| `string_vector.h` / `string_vector.c` | String parsing utility | Do not modify |
| `swish.c` | Main shell code | Do not modify |
| `swish_funcs.h` | Swish helper functions header | Do not modify |
| `swish_funcs_provided.o` | Provided precompiled helpers | Do not modify |
| `swish_funcs.c` | Extend shell for pipelines | **EDIT THIS** |
| `testius` | Test runner | Do not modify |
| `test_cases/` | Test cases and materials | Do not modify |

Only modify files marked as **EDIT**.

---

## 🚀 Project Tasks

### Part 1: Parallel Letter Counting
- Each file processed by one child process.
- Shared single pipe for all children to parent.
- Count both upper and lower case letters.
- Aggregate results in the parent and print totals.

**Complete These Functions in `par_letter_counts.c`:**
- `count_letters()`: Read file and populate letter counts.
- `process_file()`: Process one file, send array to parent.
- `main()`: Create pipe, fork children, collect results, and clean up.

**Grading Focus:**
- Proper file I/O, pipe usage, and error handling.
- Correct aggregation of child results.
- Robust resource management (pipes, memory, child wait).

### Part 2: Extending `swish` for Pipelines
- Support multi-stage pipelines (commands separated by `|`).
- First command uses standard input.
- Last command uses standard output.
- Interior commands use pipe connections.

**Complete These Functions in `swish_funcs.c`:**
- `run_piped_command()`: Set up redirection in a child.
- `run_pipelined_commands()`: Build and run entire pipeline.

**Grading Focus:**
- Correct creation and use of pipes.
- Proper fork/exec with input/output redirection.
- Good resource management (close unused fds).

---

## 💡 Tips & Assumptions
- Write letter arrays with a single `write()` call.
- `sizeof(int) * 26` is safely under the 4096 byte pipe limit.
- Use `string_vector` utilities to slice command tokens.
- Fork children backward (from last command to first) in pipelines.
- Always clean up all pipe descriptors correctly.

### Useful System Calls
- `pipe()`, `dup2()`, `read()`, `write()`
- `fork()`, `execvp()`, `waitpid()`
- `perror()` for error reporting

---

## 🧠 Strategy & Hints
- **Start Part 1 immediately.** Parallel letter counting lays the groundwork.
- **Debug pipe behavior carefully.** Pipe blocking issues are common.
- **Modularize your code.** Break pipeline setup into small pieces.
- **Use gdb heavily.** Deadlocks often involve stuck `read()`/`write()` calls.
- **Check error returns.** System calls fail surprisingly often.

---

## 📌 Summary
Project 3 brings together core systems programming ideas: concurrency, communication, and control. You’ll learn how to manage multiple processes at once, share data between them, and dynamically compose pipelines like a real Unix shell.

You'll finish this project not just better at C — but better at thinking like an operating system!

---
**Ready to begin? Download the [starter code](proj3-code.zip) and get building!**
