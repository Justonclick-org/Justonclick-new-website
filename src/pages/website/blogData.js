import payrollRun from "../../components/assets/blog/payroll-run.jpg";
import payrollPayslip from "../../components/assets/blog/payroll-payslip.jpg";
import payrollPfEsic from "../../components/assets/blog/payroll-pf-esic.jpg";
import attendancePunch from "../../components/assets/blog/attendance-punch.jpg";
import attendanceGeofence from "../../components/assets/blog/attendance-geofence.jpg";
import attendanceApproval from "../../components/assets/blog/attendance-approval.jpg";

/**
 * Blog posts. Each body is a list of blocks:
 *   { type: "p" | "h2" | "quote", text }
 *   { type: "list", items: [...] }
 *   { type: "image", src, caption }
 * Screens are from Justonclick HRMS, recorded with a sample company.
 */
export const POSTS = [
  {
    slug: "payroll-and-statutory-compliance-without-the-month-end-scramble",
    category: "Payroll",
    title: "Payroll and Statutory Compliance Without the Month-End Scramble",
    excerpt:
      "Why spreadsheet payroll breaks as teams grow, and how a structured payroll run with built-in PF, ESI, professional tax and TDS turns month-end into a routine review.",
    date: "October 2026",
    readTime: "6 min read",
    cover: payrollRun,
    coverAlt: "Monthly payroll run in Justonclick HRMS showing gross, deductions and net pay per employee",
    body: [
      {
        type: "p",
        text: "For most growing businesses, payroll starts life as a spreadsheet. It works well enough at ten employees. By fifty, the same sheet is being reconciled against attendance exports, leave records and last month's corrections — and the person running it is the only one who understands the formulas. Month-end becomes a scramble, and every statutory deadline adds pressure.",
      },
      {
        type: "p",
        text: "The problem is rarely effort. It is structure. When salary rules, attendance and compliance live in separate places, every payroll cycle is rebuilt by hand. Here is how a connected payroll process removes that rework, using Justonclick HRMS as the example.",
      },
      { type: "h2", text: "Where spreadsheet payroll starts to break" },
      {
        type: "list",
        items: [
          "Attendance and leave are copied in manually, so a single missed update changes someone's pay.",
          "Statutory rules sit inside formulas that are hard to audit and easy to overwrite.",
          "There is no clear point at which the month is final — figures keep changing after salaries are paid.",
          "Employees email HR for payslips, and every request is handled one by one.",
        ],
      },
      { type: "h2", text: "Start with salary structures, not individual rows" },
      {
        type: "p",
        text: "A reliable payroll begins with salary structures: earnings and deductions grouped once and assigned to employees, or derived from an agreed CTC. When a structure changes, every employee on it changes with it. Finance stops editing individual rows and starts managing rules.",
      },
      { type: "h2", text: "Preview, process, then lock the month" },
      {
        type: "p",
        text: "The most important habit in payroll is a deliberate review step. In Justonclick HRMS, Finance Admin previews the month first — basic, gross, attendance-based deductions, statutory amounts and net pay for every employee — before anything is final. Only then is payroll processed and the month locked, so the numbers paid are the numbers on record.",
      },
      { type: "h2", text: "Compliance calculated inside the run" },
      {
        type: "p",
        text: "Statutory compliance should be an output of payroll, not a separate task afterwards. Justonclick HRMS works out the statutory figures in the same run:",
      },
      {
        type: "list",
        items: [
          "PF at 12% of a wage capped at ₹15,000.",
          "ESI where an employee's gross pay is ₹21,000 or less.",
          "Professional tax and TDS.",
          "PF ECR and ESIC exports ready for filing.",
        ],
      },
      {
        type: "image",
        src: payrollPfEsic,
        caption: "Statutory Compliance: employee and employer PF, ESIC eligibility and filing exports for the month.",
      },
      {
        type: "quote",
        text: "When compliance is calculated in the same run as pay, there is nothing to reconcile at filing time — the figures already agree.",
      },
      { type: "h2", text: "Payslips employees can find themselves" },
      {
        type: "p",
        text: "Once the month is processed, payslips are published to employees, who view and download them under My Payslips. Routine payslip requests disappear from HR's inbox, and employees can also declare tax investments in the same place.",
      },
      {
        type: "image",
        src: payrollPayslip,
        caption: "An employee's payslip, available to download as soon as payroll is processed.",
      },
      { type: "h2", text: "A checklist for your next payroll cycle" },
      {
        type: "list",
        items: [
          "Are salary components defined once and grouped into structures?",
          "Does attendance flow into pay automatically, or is it copied in?",
          "Is there a preview step before the month is locked?",
          "Are PF, ESI, professional tax and TDS calculated in the run itself?",
          "Can employees get their own payslips without emailing HR?",
        ],
      },
      {
        type: "p",
        text: "If more than one answer is no, the month-end scramble is a process problem — and it is solvable. Bank disbursement, full and final settlement, retro arrears and a payroll journal for your accounting system complete the cycle in the same platform.",
      },
    ],
  },
  {
    slug: "attendance-you-can-trust-geo-fencing-face-verification-and-approvals",
    category: "Attendance",
    title: "Attendance You Can Trust: Geo-Fencing, Face Verification and Approvals",
    excerpt:
      "Proxy punches, missed check-outs and untracked work-from-home days quietly distort payroll. Here is how to record attendance where the work actually happens.",
    date: "October 2026",
    readTime: "5 min read",
    cover: attendancePunch,
    coverAlt: "My Attendance screen in Justonclick HRMS showing check-in and check-out times",
    body: [
      {
        type: "p",
        text: "Attendance is the input to almost every HR decision — pay, leave balances, late marks and performance conversations. Yet in many organizations it is the least reliable data in the business. Punches are made on someone else's behalf, check-outs are forgotten, and work-from-home days are agreed over chat and never recorded.",
      },
      {
        type: "p",
        text: "Each gap looks small on its own. Together, they mean payroll is calculated on attendance nobody fully trusts. The fix is not stricter policing; it is a system that records attendance where the work happens and gives every exception a clear path to approval.",
      },
      { type: "h2", text: "One-click punch in and out, on web or mobile" },
      {
        type: "p",
        text: "In Justonclick HRMS, employees punch in and out from the web or the mobile app. Worked hours, late marks and the day's status are calculated automatically, so the record is complete the moment the day ends — no manual timesheet reconciliation required.",
      },
      { type: "h2", text: "Geo-fencing: confirm the punch came from the office" },
      {
        type: "p",
        text: "An Org Admin sets the office location and a radius, then chooses how strictly it is enforced:",
      },
      {
        type: "list",
        items: [
          "Strict — a punch from outside the geo-fence is refused, and the employee is told how far away they are.",
          "Warn and Track — lighter modes for teams that need more flexibility, such as field staff.",
        ],
      },
      {
        type: "image",
        src: attendanceGeofence,
        caption: "Strict mode in action: a punch from outside the configured office radius is blocked.",
      },
      { type: "h2", text: "Face verification: confirm who is punching" },
      {
        type: "p",
        text: "Location answers where; face verification answers who. After a one-time face registration, a live photo is captured at each punch when the organization turns the feature on — removing proxy attendance without adding friction for honest employees.",
      },
      { type: "h2", text: "Exceptions with a clear approval path" },
      {
        type: "p",
        text: "Real workdays are messy, and a good attendance system plans for that. A missed check-in or check-out is corrected through a regularization request with the corrected time and a reason. Work-from-home days are requested with a location and reason. Both go to the employee's manager, who reviews and approves them from a single queue.",
      },
      {
        type: "image",
        src: attendanceApproval,
        caption: "A manager reviewing a regularization request before approving the corrected time.",
      },
      {
        type: "quote",
        text: "Every exception leaves a trail: who requested it, why, and who approved it. That is what makes attendance data defensible.",
      },
      { type: "h2", text: "Shifts, biometric devices and payroll" },
      {
        type: "p",
        text: "Shifts are assigned on a roster, and punches from existing biometric devices can be brought into the same record. Because attendance and payroll share one system, attendance-based deductions flow straight into the monthly payroll preview — the same verified data drives both.",
      },
      { type: "h2", text: "Rolling it out in four steps" },
      {
        type: "list",
        items: [
          "Draw the geo-fence: set office coordinates, a radius and the mode.",
          "Employees punch in and out from the web or the app.",
          "Missed punches are fixed through regularization requests.",
          "Managers approve regularization and WFH requests from Attendance Approvals.",
        ],
      },
      {
        type: "p",
        text: "The result is attendance that employees find easy, managers find fair, and finance can rely on when it is time to run payroll.",
      },
    ],
  },
];
