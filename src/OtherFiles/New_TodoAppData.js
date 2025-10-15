const newTodosAppData = {
  boards: {
    0: {
      boardTitle: "Personal Tasks",
      taskIds: [0, 1, 2, 3, 4],
    },
    1: {
      boardTitle: "Work Tasks",
      taskIds: [5, 6, 7, 8],
    },
    2: {
      boardTitle: "Fitness Goals",
      taskIds: [9],
    }
  },
  tasks: {
    0: {
      taskTitle: "Complete homework",
      taskDescription: "Finish math and science assignments",
      isCompleted: false,
      priority:1,
    },
    1: {
      taskTitle: "Buy groceries",
      taskDescription: "Milk, eggs, bread, and fruits",
      isCompleted: false,
      priority:2,
    },
    2: {
      taskTitle: "Call John",
      taskDescription: "Discuss the upcoming project",
      isCompleted: false,
      priority:1,
    },
    3: {
      taskTitle: "Prepare presentation",
      taskDescription: "Gather slides and practice",
      isCompleted: false,
      priority:3,
    },
    4: {
      taskTitle: "Meeting with client",
      taskDescription: "Discuss project requirements",
      isCompleted: false,
      priority:2,
    },
    5: {
      taskTitle: "Write report",
      taskDescription: "Research findings and compile into a report",
      isCompleted: false,
      priority:3,
    },
    6: {
      taskTitle: "Call mom",
      taskDescription: "Check in and see how she's doing",
      isCompleted: false,
      priority:1,
    },
    7: {
      taskTitle: "Plan vacation",
      taskDescription: "Decide on destination and book tickets",
      isCompleted: false,
      priority:2,
    },
    8: {
      taskTitle: "Review budget",
      taskDescription: "Analyze expenses and savings",
      isCompleted: false,
      priority:2,
    },
    9: {
      taskTitle: "Exercise",
      taskDescription: "Go for a run or hit the gym",
      isCompleted: false,
      priority:2,
    }
  },
  nextTaskId: 10,
  nextBoardId: 3,
};

export default newTodosAppData;
