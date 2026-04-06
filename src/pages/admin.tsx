import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  LogOut, 
  Search, 
  Trash2, 
  Mail, 
  Building2,
  Calendar,
  Filter,
  RefreshCw
} from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Contact = Database["public"]["Tables"]["contacts"]["Row"];

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [planFilter, setPlanFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) {
      fetchContacts();
    }
  }, [user]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      setUser(session.user);
    }
    setLoading(false);
  };

  const fetchContacts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching contacts:", error);
    } else {
      setContacts(data || []);
    }
    setLoading(false);
  };

  const handleSignIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Invalid credentials");
    } else {
      checkAuth();
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setContacts([]);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;

    const { error } = await supabase
      .from("contacts")
      .delete()
      .eq("id", id);

    if (error) {
      alert("Error deleting contact");
    } else {
      fetchContacts();
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from("contacts")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      alert("Error updating status");
    } else {
      fetchContacts();
    }
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (contact.company || "").toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPlan = planFilter === "all" || contact.plan === planFilter;
    const matchesStatus = statusFilter === "all" || contact.status === statusFilter;

    return matchesSearch && matchesPlan && matchesStatus;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-primary">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm onSignIn={handleSignIn} />;
  }

  return (
    <>
      <SEO
        title="Admin Dashboard - O.N.E.Tech"
        description="Manage contact form submissions"
      />
      <div className="min-h-screen bg-background">
        <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-heading font-bold text-primary">O.N.E.Tech</h1>
                <p className="text-sm text-muted-foreground">Admin Dashboard</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">{user.email}</span>
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold mb-2">Contact Submissions</h2>
            <p className="text-muted-foreground">View and manage customer inquiries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="p-4 bg-card/60 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Contacts</p>
                  <p className="text-2xl font-bold">{contacts.length}</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card/60 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">New Today</p>
                  <p className="text-2xl font-bold">
                    {contacts.filter(c => {
                      const today = new Date().toDateString();
                      const contactDate = new Date(c.created_at).toDateString();
                      return today === contactDate;
                    }).length}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card/60 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Filter className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Filtered Results</p>
                  <p className="text-2xl font-bold">{filteredContacts.length}</p>
                </div>
              </div>
            </Card>

            <div className="flex items-center justify-end">
              <Button
                onClick={fetchContacts}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
            </div>
          </div>

          <div className="bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={planFilter} onValueChange={setPlanFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Plans</SelectItem>
                  <SelectItem value="Starter">Starter</SelectItem>
                  <SelectItem value="Growth">Growth</SelectItem>
                  <SelectItem value="Pro">Pro</SelectItem>
                  <SelectItem value="Enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="qualified">Qualified</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-border/50">
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContacts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-12 text-muted-foreground">
                        No contacts found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredContacts.map((contact) => (
                      <TableRow key={contact.id} className="border-border/50">
                        <TableCell className="font-medium">{contact.name}</TableCell>
                        <TableCell>
                          <a 
                            href={`mailto:${contact.email}`}
                            className="text-primary hover:underline"
                          >
                            {contact.email}
                          </a>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {contact.company && (
                              <>
                                <Building2 className="w-4 h-4 text-muted-foreground" />
                                {contact.company}
                              </>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="border-primary/30">
                            {contact.plan}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Select
                            value={contact.status}
                            onValueChange={(value) => handleUpdateStatus(contact.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="contacted">Contacted</SelectItem>
                              <SelectItem value="qualified">Qualified</SelectItem>
                              <SelectItem value="closed">Closed</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(contact.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <p className="text-sm text-muted-foreground truncate">
                            {contact.message}
                          </p>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            onClick={() => handleDelete(contact.id)}
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

function LoginForm({ onSignIn }: { onSignIn: (email: string, password: string) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <SEO
        title="Admin Login - O.N.E.Tech"
        description="Admin dashboard login"
      />
      <Card className="w-full max-w-md p-8 bg-card/60 backdrop-blur-sm border-border/50">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">O.N.E.Tech</h1>
          <p className="text-muted-foreground">Admin Dashboard Login</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@onetechautomation.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}