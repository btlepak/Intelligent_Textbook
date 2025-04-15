# **Chapter 2: I/O Basics & Redirection**

## Overview
This chapter covers fundamental concepts of Input/Output (I/O) operations in Unix-based operating systems, with a focus on file descriptors, standard streams, and redirection techniques. Understanding how I/O works at the system level is crucial for efficient programming and automation.

Key topics covered in this chapter include:
- File descriptors and standard streams
- System calls for I/O operations
- Input and output redirection
- Pipes and command chaining
- Error handling in I/O operations

## File Descriptors and Standard Streams
In Unix-like operating systems, every process interacts with files and devices through **file descriptors**, which are integer handles assigned by the kernel. The three standard file descriptors are:

| File Descriptor | Symbolic Name | Description |
|----------------|--------------|-------------|
| 0 | `STDIN` | Standard Input (keyboard by default) |
| 1 | `STDOUT` | Standard Output (screen by default) |
| 2 | `STDERR` | Standard Error (screen by default) |

### Example: Writing to Standard Output
The following C program demonstrates writing to `STDOUT` using `write()`:

```c
#include <unistd.h>
int main() {
    write(1, "Hello, World!\n", 14);
    return 0;
}
```

## System Calls for I/O Operations
Unix provides system calls for low-level I/O operations:

- `open()`: Opens a file and returns a file descriptor.
- `read()`: Reads data from a file descriptor.
- `write()`: Writes data to a file descriptor.
- `close()`: Closes an open file descriptor.

### Example: Reading from a File
The following C program reads from a file using `open()` and `read()`:

```c
#include <fcntl.h>
#include <unistd.h>
#include <stdio.h>

int main() {
    char buffer[100];
    int fd = open("file.txt", O_RDONLY);
    if (fd < 0) {
        perror("Error opening file");
        return 1;
    }
    read(fd, buffer, sizeof(buffer));
    write(1, buffer, sizeof(buffer));
    close(fd);
    return 0;
}
```

## Input and Output Redirection
Unix shells allow redirection of standard streams:

- `command > file` → Redirects **stdout** to a file.
- `command < file` → Redirects **stdin** from a file.
- `command 2> file` → Redirects **stderr** to a file.
- `command >> file` → Appends **stdout** to a file.

### Example: Redirecting Output
```sh
echo "Hello, Unix!" > output.txt
```
This command writes "Hello, Unix!" into `output.txt` instead of displaying it on the screen.

## Pipes and Command Chaining
Pipes (`|`) allow chaining of commands by redirecting the output of one command as the input of another.

### Example: Using a Pipe
```sh
ls -l | grep "txt"
```
This command lists files and filters results containing "txt".

## Error Handling in I/O
Handling errors in I/O operations is crucial. The `perror()` function can be used in C to print error messages based on the global `errno` variable.

### Example: Handling File Opening Errors
```c
#include <stdio.h>
#include <fcntl.h>
#include <errno.h>

int main() {
    int fd = open("nonexistent.txt", O_RDONLY);
    if (fd == -1) {
        perror("Error opening file");
        return 1;
    }
    return 0;
}
```

## Interactive Quiz
Test your understanding of I/O basics and redirection:

1. Which file descriptor represents standard error?

    **A**. 0<br>
    **B**. 1<br>
    **C**. 2<br>

    ??? question "Show Answer"
        The correct answer is **C**. File descriptor `2` represents `STDERR` (Standard Error).

2. What does the command `ls > output.txt` do?

    **A**. Lists files and prints to the terminal<br>
    **B**. Lists files and saves output to `output.txt`<br>
    **C**. Appends the list of files to `output.txt`<br>

    ??? question "Show Answer"
        The correct answer is **B**. The `>` operator redirects `stdout` to `output.txt`, overwriting its contents.

3. What does the `|` (pipe) symbol do in Unix?

    **A**. Creates a new process<br>
    **B**. Redirects output of one command as input to another<br>
    **C**. Reads a file line by line<br>

    ??? question "Show Answer"
        The correct answer is **B**. Pipes allow the output of one command to be used as input for another command.

## Summary
- Unix uses **file descriptors** (0: `STDIN`, 1: `STDOUT`, 2: `STDERR`) for I/O operations.
- System calls like `open()`, `read()`, `write()`, and `close()` manage file I/O.
- **Redirection (`>`, `<`, `2>`)** allows controlling input and output.
- **Pipes (`|`)** enable chaining of commands.
- Error handling using `perror()` improves the robustness of I/O operations.

Understanding these concepts is crucial for handling files and streams efficiently in Unix. The next chapter will explore **File Systems** and how Unix organizes and manages data storage.

---
*This chapter is based on material from "Advanced Programming in the UNIX Environment, Third Edition, by W. Richard Stevens and Stephen A. Rago, 2013."*

