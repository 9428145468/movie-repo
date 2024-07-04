import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const Component = () => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950 text-stone-200">
      <main className="flex-1 py-10 px-6 md:px-10">
        <div className="flex items-center justify-between mb-8">
          <div className="grid gap-1">
            <h1 className="text-3xl font-bold text-stone-100">Admin Dashboard</h1>
            <p className="text-stone-400">Manage your movie ticketing platform.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <Input
                type="search"
                placeholder="Search movies, users, etc..."
                className="pl-10 pr-4 py-2 rounded-md bg-stone-800 text-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Card className="bg-stone-800 text-stone-100 border-stone-600">
            <CardHeader>
              <CardTitle>Total Movies</CardTitle>
              <CardDescription>The total number of movies in your platform.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">125</div>
              <FilmIcon className="w-10 h-10 text-stone-400" />
            </CardContent>
          </Card>
          <Card className="bg-stone-800 text-stone-100 border-stone-600">
            <CardHeader>
              <CardTitle>Total Showtimes</CardTitle>
              <CardDescription>The total number of showtimes across all theaters.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">1,250</div>
              <CalendarIcon className="w-10 h-10 text-stone-400" />
            </CardContent>
          </Card>
          <Card className="bg-stone-800 text-stone-100 border-stone-600">
            <CardHeader>
              <CardTitle>Total Theaters</CardTitle>
              <CardDescription>The total number of theaters in your platform.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">35</div>
              <MapPinIcon className="w-10 h-10 text-stone-400" />
            </CardContent>
          </Card>
          <Card className="bg-stone-800 text-stone-100 border-stone-600">
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
              <CardDescription>The total number of registered users on your platform.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">12,345</div>
              <UsersIcon className="w-10 h-10 text-stone-400" />
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-stone-800 text-stone-100 border-stone-600">
            <CardHeader>
              <CardTitle>Recent Movies</CardTitle>
              <CardDescription>The latest movies added to your platform.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table className="bg-stone-800 text-stone-100">
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Release Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Top Gun: Maverick</div>
                    </TableCell>
                    <TableCell>May 27, 2022</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="text-stone-100 bg-stone-800 hover:text-stone-800 border-stone-600 hover:bg-stone-100">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-stone-100 bg-red-600 border-red-700 hover:bg-red-800 hover:text-white">
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Jurassic World: Dominion</div>
                    </TableCell>
                    <TableCell>June 10, 2022</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="text-stone-100 bg-stone-800 hover:text-stone-800 border-stone-600 hover:bg-stone-100">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-stone-100 bg-red-600 border-red-700 hover:bg-red-800 hover:text-white">
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Thor: Love and Thunder</div>
                    </TableCell>
                    <TableCell>July 8, 2022</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="text-stone-100 bg-stone-800 hover:text-stone-800 border-stone-600 hover:bg-stone-100">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-stone-100 bg-red-600 border-red-700 hover:bg-red-800 hover:text-white">
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Nope</div>
                    </TableCell>
                    <TableCell>July 22, 2022</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="text-stone-100 bg-stone-800 hover:text-stone-800 border-stone-600 hover:bg-stone-100">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-stone-100 bg-red-600 border-red-700 hover:bg-red-800 hover:text-white">
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="bg-stone-800 text-stone-100 border-stone-600">
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
              <CardDescription>The latest ticket bookings on your platform.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table className="bg-stone-800 text-stone-100">
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Movie</TableHead>
                    <TableHead>Showtime</TableHead>
                    <TableHead>Tickets</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">John Doe</div>
                      <div className="text-stone-400 text-sm">john@example.com</div>
                    </TableCell>
                    <TableCell>Top Gun: Maverick</TableCell>
                    <TableCell>May 27, 2022 - 7:00 PM</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Jane Smith</div>
                      <div className="text-stone-400 text-sm">jane@example.com</div>
                    </TableCell>
                    <TableCell>Jurassic World: Dominion</TableCell>
                    <TableCell>June 10, 2022 - 3:30 PM</TableCell>
                    <TableCell>4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Michael Johnson</div>
                      <div className="text-stone-400 text-sm">michael@example.com</div>
                    </TableCell>
                    <TableCell>Thor: Love and Thunder</TableCell>
                    <TableCell>July 8, 2022 - 9:00 PM</TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Emily Davis</div>
                      <div className="text-stone-400 text-sm">emily@example.com</div>
                    </TableCell>
                    <TableCell>Nope</TableCell>
                    <TableCell>July 22, 2022 - 6:45 PM</TableCell>
                    <TableCell>3</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function CalendarIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function FilmIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  );
}

function MapPinIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SearchIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UsersIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default Component;
