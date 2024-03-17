import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function BookingHistory() {
  const mockHistory = [
    {
      workspace: "Workspace 1",
      startDate: "2024-03-17",
      endDate: "2024-03-19",
      startHour: "9:00 AM",
      endHour: "5:00 PM",
    },
    {
      workspace: "Workspace 2",
      startDate: "2024-03-18",
      endDate: "2024-03-20",
      startHour: "10:00 AM",
      endHour: "6:00 PM",
    },
    {
      workspace: "Workspace 3",
      startDate: "2024-03-19",
      endDate: "2024-03-21",
      startHour: "11:00 AM",
      endHour: "7:00 PM",
    },
    {
      workspace: "Workspace 4",
      startDate: "2024-03-20",
      endDate: "2024-03-22",
      startHour: "8:00 AM",
      endHour: "4:00 PM",
    },
    {
      workspace: "Workspace 5",
      startDate: "2024-03-21",
      endDate: "2024-03-23",
      startHour: "9:30 AM",
      endHour: "5:30 PM",
    },
    {
      workspace: "Workspace 6",
      startDate: "2024-03-22",
      endDate: "2024-03-24",
      startHour: "10:30 AM",
      endHour: "6:30 PM",
    },
    {
      workspace: "Workspace 7",
      startDate: "2024-03-23",
      endDate: "2024-03-25",
      startHour: "8:30 AM",
      endHour: "4:30 PM",
    },
    {
      workspace: "Workspace 8",
      startDate: "2024-03-24",
      endDate: "2024-03-26",
      startHour: "11:30 AM",
      endHour: "7:30 PM",
    },
    {
      workspace: "Workspace 9",
      startDate: "2024-03-25",
      endDate: "2024-03-27",
      startHour: "9:00 AM",
      endHour: "5:00 PM",
    },
    {
      workspace: "Workspace 10",
      startDate: "2024-03-26",
      endDate: "2024-03-28",
      startHour: "10:00 AM",
      endHour: "6:00 PM",
    },
  ];
  return (
    <main>
      <Table>
        <TableCaption>A list of workspaces</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Workspace</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead className="text-right">Start Hour</TableHead>
            <TableHead className="text-right">End Hour</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockHistory.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{data.workspace}</TableCell>
              <TableCell>{data.startDate}</TableCell>
              <TableCell>{data.endDate}</TableCell>
              <TableCell className="text-right">{data.startHour}</TableCell>
              <TableCell className="text-right">{data.endHour}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
