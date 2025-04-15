# **Project 1: minitar - A Posix-Compatible Archive Utility**

## Source
This project was taken from CSCI 4061 Intro to Operating Systems at the University of Minnesota - Twin Cities [Fall 2024], taught by [**Jack Kolb**](https://cse.umn.edu/cs/jack-kolb).

## 📦 Starter Code
You can download the starter code here:
[proj1-code.zip](proj1-code.zip)

Save the starter code under your `csci4061` directory, which should now look like this:

```
csci4061/
├── labs/
│   ├── lab01-code/
│   └── ...
└── projects/
    └── proj1-code/
```

---

## ✅ How to Succeed on This Project
- **Read the spec thoroughly.** TAs may decline to help if you haven’t.
- **Understand the starter code.** Know what each file does.
- **Test independently.** Don’t rely solely on automated tests.
- **Expect bugs.** Stay patient and persistent.
- **Start early.** Avoid deadline pressure.
- **Ask questions publicly on Piazza.** This helps everyone.
- **Know the late policy.** No submissions accepted more than 48 hours late.

---

## 🧭 Introduction
In this project, you will implement a simplified version of the Unix `tar` utility called `minitar`. You’ll work with C and the `stdio` library to:
- Practice file I/O
- Explore systems programming techniques
- Build a Posix-compliant archive tool

Your implementation will be able to:
- Create and append to archives
- Extract files
- Interoperate with `tar`

---

### 💻 Makefile Commands
```
make                # Compile minitar
make clean          # Remove compiled files
make clean-tests    # Remove test output
make zip            # Create Gradescope zip
make test           # Run all test cases
make test testnum=5 # Run specific test
```

---

## 🧪 Manual Testing Advice
- Use your own test cases
- View archives using:
```sh
xxd test.tar | less
```
- Use `tar` for interoperability comparison
- Install `xxd` in Docker:
```sh
apt update
apt install xxd
```

---

## 🧰 Starter Code Files
| File | Purpose | Notes |
|------|---------|-------|
| `Makefile` | Build/tests | Do not modify |
| `file_list.h` / `file_list.c` | Linked list support | Do not modify |
| `minitar.h` | Archive headers | Do not modify |
| `minitar.c` | Archive operations | **EDIT THIS** |
| `minitar_main.c` | CLI logic | **EDIT THIS** |
| `testius` | Test runner | Do not modify |
| `test_cases/` | Sample inputs | Do not modify |

Only modify the files marked as **EDIT**.

---

## 📦 Archive Format Overview
- Each archive is made of 512-byte blocks
- Each file: 1 header block + content blocks
- Ends with **two zero blocks**

### tar_header Struct
Defined in `minitar.h`, it uses **octal-encoded strings** for numeric fields.

```c
char size[12];  // octal, null-terminated string
```

Use `fill_tar_header()` to generate headers.

---

## 🚀 Archive Operations
### Create
```sh
./minitar -c -f archive.tar file1 file2
```
- Write header and data for each file
- Add two-block footer

### Append
```sh
./minitar -a -f archive.tar newfile
```
- Remove footer with `remove_trailing_bytes()`
- Append new headers/data
- Add new footer

### List
```sh
./minitar -t -f archive.tar
```
- Print name of each file in archive
- Stop when footer blocks are reached

### Update
```sh
./minitar -u -f archive.tar existingfile
```
- Like append, but must already exist in archive
- Error message if not:
```
Error: One or more of the specified files is not already present in archive.
```

### Extract
```sh
./minitar -x -f archive.tar
```
- Write out each member file
- Only extract latest version if duplicates exist

---

## 💡 Tips & Assumptions
- No nested directory support
- Use high-level I/O (`fopen`, not `open`)
- Use `memset()`, `fseek()`, `ftell()`
- Leverage `fill_tar_header()` and `file_list` utilities

### Useful C Functions
- `fread()`, `fwrite()`
- `ftell()`, `fseek()`
- `sscanf()` for octal parsing
- `perror()` for error reporting

---

## 🧠 Strategy & Hints
- **Reuse logic** between operations
- **Write helpers** for block iteration
- **Start early**, debug often, test manually
- Avoid mixing `fopen()` and `open()`

---

## 📌 Summary
This project is your first big opportunity to apply **systems-level thinking** and build a utility that mirrors a well-known Unix tool. You'll practice file I/O, struct management, and command-line parsing — and develop habits that will serve you in all future OS coursework.

---
**Ready to begin? Download the [starter code](proj1-code.zip) and get coding!**