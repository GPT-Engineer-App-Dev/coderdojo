import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to the Coding Platform</h1>
      <section>
        <h2 className="text-2xl font-semibold">Featured Courses</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Course Title</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <p>Course description goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Course Title</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <p>Course description goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Course Title</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <p>Course description goes here.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;