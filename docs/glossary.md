# **Glossary of Terms**

#### Access Control
A method used to restrict access to system resources based on user identity or role. Access control determines which users or processes are authorized to access or modify data.

#### Address Space
The range of memory addresses that a process can use. Each process has its own virtual address space isolated from others.

#### Archive
A file that contains a collection of other files and metadata, often used for storage or transfer. Example: `minitar` creates an archive of multiple files in a `.tar` format.

#### Asynchronous Signal
A signal delivered to a process at an unpredictable time, often in response to an external event like a keyboard interrupt.

#### Atomic Operation
An operation that completes without the possibility of interference from other operations. It is indivisible and guarantees consistency.

#### Background Process
A process running independently of user interaction, typically started with an `&` in Unix shells.

#### BSS Segment
A region of memory used to store statically allocated variables that are declared but not initialized. Example: Uninitialized global variables reside in the BSS segment.

#### Buffer
A temporary storage area used to hold data while it is being transferred between two locations.

#### Child Process
A process created by another process (the parent) using a system call like `fork()`.

#### Command-Line Argument
An input value passed to a program at the time of execution, used to control program behavior. Example: `./minitar -c -f archive.tar file1.txt`

#### Condition Variable
A synchronization primitive used to block a thread until a particular condition is met.

#### Context Switch
The act of saving and restoring the state of a CPU so that execution can switch from one process or thread to another.

#### CPU Scheduling
The method by which the operating system decides which process or thread should be executed next on the CPU.

#### Critical Section
A section of code that must be executed by only one thread at a time to prevent race conditions.

#### Daemon
A background process that runs without user interaction, often initiated at boot time to perform system-level tasks.

#### Deadlock
A condition where two or more processes are waiting for each other to release resources, resulting in a cycle that prevents progress.

#### Directory
A file that contains references to other files or directories, forming a hierarchical file structure.

#### Disk I/O
Operations involving reading from or writing to disk storage.

#### Dynamic Memory Allocation
The process of allocating memory at runtime using functions like `malloc()`.

#### Endianness
The byte order used to store data in memory. Common types are little-endian and big-endian.

#### Environment Variable
A variable that defines system-wide or process-specific settings, accessible via the process's environment.

#### Error Code
A numeric or symbolic value returned by a function or system call to indicate the outcome of an operation.

#### Exit Status
A value returned by a process when it terminates, used to signal success or failure to the parent process.

#### File Descriptor
An integer handle used by the operating system to identify an open file, socket, or pipe.

#### File Metadata
Attributes of a file such as size, permissions, timestamps, and ownership.

#### File Pointer
A pointer used to access a specific location in a file, typically used with the `fseek()` and `ftell()` functions.

#### File System
A structure for organizing and storing files on a storage device.

#### Fork
A system call used to create a new process by duplicating the calling process.

#### Free
A function used to deallocate memory previously allocated using `malloc()` or similar functions.

#### GDB
The GNU Debugger, a tool used to debug C/C++ programs by inspecting variables and controlling program execution.

#### Header Block
A 512-byte block in a tar archive that stores metadata for a file. Example: `fill_tar_header()` populates this structure in `minitar`.

#### Heap
A region of a process's memory used for dynamic memory allocation.

#### I/O Redirection
The practice of changing the standard input/output of a command to read from or write to a file.

#### Inode
A data structure in a Unix file system that stores information about a file except its name.

#### Interrupt
A signal sent to the CPU to indicate an event that needs immediate attention.

#### IPC (Inter-Process Communication)
Mechanisms provided by the OS to allow processes to communicate and synchronize.

#### Kernel
The core component of an operating system responsible for managing hardware and system resources.

#### Kernel Space
A protected memory region where the operating system kernel executes and manages operations.

#### Linked List
A dynamic data structure consisting of nodes that contain data and a pointer to the next node.

#### Listener Socket
A socket that waits for incoming connection requests in a server program.

#### Load Address
The starting address in memory where a program is loaded.

#### Lock
A mechanism that prevents concurrent access to a resource by multiple threads.

#### Makefile
A script used to manage the build process of a project using the `make` utility. Example: `make test` runs all automated tests.

#### Memory Leak
A condition where allocated memory is not properly deallocated, leading to wasted resources.

#### Memory Mapping
A technique that maps a file or device into memory so that file I/O can be treated as memory operations.

#### Message Queue
An IPC mechanism for sending and receiving messages between processes.

#### Minitar
A simplified, POSIX-compliant implementation of the `tar` utility. Example: `minitar` can create and extract archive files.

#### Mode
A file attribute indicating read, write, and execute permissions.

#### Mount Point
A directory in which an additional file system is attached to the existing directory tree.

#### Mutex
A mutual exclusion lock used to prevent simultaneous access to a resource.

#### Named Pipe
A special file that acts as a conduit for communication between processes. Unlike anonymous pipes, named pipes have a name in the file system.

#### Octal Notation
A base-8 numbering system often used to represent file permissions and tar metadata.

#### Offset
The position of a byte or block within a file or memory region.

#### Orphan Process
A process whose parent has terminated, leaving it under the control of the `init` or `systemd` process.

#### Page Fault
An event triggered when a process accesses a part of its address space that is not currently in physical memory.

#### Page Table
A data structure used by the memory management unit to map virtual addresses to physical addresses.

#### Parent Process
A process that creates one or more child processes.

#### Path
A string that specifies the location of a file or directory in the file system hierarchy.

#### Permissions
Attributes that define the access rights of users to files and directories.

#### Pipe
A unidirectional communication channel between two processes.

#### Pointer
A variable that holds the memory address of another variable.

#### Posix
A family of standards specified by IEEE to maintain compatibility between operating systems. Example: `minitar` follows the Posix archive format.

#### Process
An independent execution unit with its own memory space, created using a system call like `fork()`.

#### Process Table
A data structure maintained by the OS to track all running processes.

#### Race Condition
An undesirable effect where the outcome of a program depends on the timing of uncontrollable events.

#### Read System Call
A system call used to read data from a file or input device.

#### Recursion
A programming technique where a function calls itself to solve smaller sub-problems.

#### Return Code
A value returned by a function or program indicating success or failure.

#### Scheduler
The OS component responsible for determining which process/thread runs at any given time.

#### Semaphore
A synchronization primitive that is used to control access to a common resource in concurrent systems.

#### Shell
A command-line interpreter that allows users to interact with the operating system.

#### Signal
A notification sent to a process to inform it of an event. Example: `SIGINT` interrupts a program from the terminal.

#### Socket
An endpoint for communication between two machines or processes over a network.

#### Stack
A region of memory used for function calls, storing return addresses, parameters, and local variables.

#### Standard Input (stdin)
The default source of input for a program, usually the keyboard.

#### Standard Output (stdout)
The default destination for output from a program, usually the terminal.

#### Standard Error (stderr)
The standard output stream used for error messages.

#### Static Variable
A variable that retains its value across function calls and has a fixed memory location.

#### Strace
A diagnostic tool that traces system calls made by a process.

#### Swap Space
Disk space used to supplement RAM by holding inactive pages of memory.

#### System Call
A request from user space to the operating system to perform a privileged operation.

#### Tar
A Unix utility that combines multiple files into a single archive. `minitar` replicates this functionality in a simplified form.

#### TCP (Transmission Control Protocol)
A reliable, connection-oriented protocol used for transmitting data over networks.

#### Thread
A lightweight process that shares memory with other threads in the same process.

#### Time-Sharing
A method for allowing multiple processes to use the CPU by switching between them quickly.

#### TLB (Translation Lookaside Buffer)
A cache used to reduce the time taken to access page table entries.

#### UID (User Identifier)
A numeric value that uniquely identifies a user on a Unix system.

#### Unnamed Pipe
A pipe created without a name in the file system, typically used for communication between a parent and child process.

#### Update Operation
A `minitar` operation that appends new versions of existing files in an archive.

#### User Space
The portion of memory where user applications run, separate from kernel space.

#### Virtual Address
An address used by a process that is translated to a physical address by the MMU.

#### Virtual Memory
An abstraction that allows processes to use more memory than physically available by using disk storage.

#### Wait
A system call used by a parent process to wait for its child to terminate.

#### Write System Call
A system call used to write data to a file or output device.

#### Zero Block
A 512-byte block of zeros marking the end of a tar archive.

