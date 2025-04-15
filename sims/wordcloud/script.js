import React, { useEffect, useRef } from 'react';
import WordCloud from 'wordcloud';

const OSConceptWordcloud = () => {
  const canvasRef = useRef(null);

  const concepts = [
    ['Access Control', 50], ['Address Space', 50], ['Archive', 50], ['Asynchronous Signal', 50],
    ['Atomic Operation', 50], ['Background Process', 50], ['BSS Segment', 50], ['Buffer', 50],
    ['Child Process', 50], ['Command-Line Argument', 50], ['Condition Variable', 50],
    ['Context Switch', 50], ['CPU Scheduling', 50], ['Critical Section', 50], ['Daemon', 50],
    ['Deadlock', 50], ['Directory', 50], ['Disk I/O', 50], ['Dynamic Memory Allocation', 50],
    ['Endianness', 50], ['Environment Variable', 50], ['Error Code', 50], ['Exit Status', 50],
    ['File Descriptor', 50], ['File Metadata', 50], ['File Pointer', 50], ['File System', 50],
    ['Fork', 50], ['Free', 50], ['GDB', 50], ['Header Block', 50], ['Heap', 50],
    ['I/O Redirection', 50], ['Inode', 50], ['Interrupt', 50], ['IPC', 50], ['Kernel', 50],
    ['Kernel Space', 50], ['Linked List', 50], ['Listener Socket', 50], ['Load Address', 50],
    ['Lock', 50], ['Makefile', 50], ['Memory Leak', 50], ['Memory Mapping', 50],
    ['Message Queue', 50], ['Minitar', 50], ['Mode', 50], ['Mount Point', 50], ['Mutex', 50],
    ['Named Pipe', 50], ['Octal Notation', 50], ['Offset', 50], ['Orphan Process', 50],
    ['Page Fault', 50], ['Page Table', 50], ['Parent Process', 50], ['Path', 50],
    ['Permissions', 50], ['Pipe', 50], ['Pointer', 50], ['Posix', 50], ['Process', 50],
    ['Process Table', 50], ['Race Condition', 50], ['Read System Call', 50], ['Recursion', 50],
    ['Return Code', 50], ['Scheduler', 50], ['Semaphore', 50], ['Shell', 50], ['Signal', 50],
    ['Socket', 50], ['Stack', 50], ['Standard Input', 50], ['Standard Output', 50],
    ['Standard Error', 50], ['Static Variable', 50], ['Strace', 50], ['Swap Space', 50],
    ['System Call', 50], ['Tar', 50], ['TCP', 50], ['Thread', 50], ['Time-Sharing', 50],
    ['TLB', 50], ['UID', 50], ['Unnamed Pipe', 50], ['Update Operation', 50],
    ['User Space', 50], ['Virtual Address', 50], ['Virtual Memory', 50], ['Wait', 50],
    ['Write System Call', 50], ['Zero Block', 50]
  ];

  useEffect(() => {
    if (canvasRef.current) {
      WordCloud(canvasRef.current, {
        list: concepts,
        weightFactor: 1,
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        color: 'random-dark',
        rotateRatio: 0.5,
        click: function(item) {
          const slug = item[0].toLowerCase().replace(/\s+/g, '-');
          window.location.href = `../../glossary/#${slug}`;
        },
        hover: function(item) {
          canvasRef.current.style.cursor = 'pointer';
        },
        backgroundColor: 'white'
      });
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <canvas 
        ref={canvasRef} 
        className="w-full h-96 border rounded-lg shadow-sm"
        width="800"
        height="400"
      />
      <p className="text-sm text-gray-600 mt-2 text-center">
        Click on any concept to view its definition in the glossary
      </p>
    </div>
  );
};

export default OSConceptWordcloud;