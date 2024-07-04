import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const fetchCourses = async () => {
  const response = await fetch("/api/courses");
  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }
  return response.json();
};

const enrollCourse = async (courseId) => {
  const response = await fetch(`/api/enroll/${courseId}`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Failed to enroll in course");
  }
  return response.json();
};

const Courses = () => {
  const queryClient = useQueryClient();
  const { data: courses, error, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const mutation = useMutation({
    mutationFn: enrollCourse,
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
      toast("Successfully enrolled in course");
    },
    onError: () => {
      toast("Failed to enroll in course");
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading courses</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Courses</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={course.image} alt={course.title} className="mx-auto object-cover w-full h-[200px]" />
              <p>{course.description}</p>
              <Button onClick={() => mutation.mutate(course.id)}>Enroll</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;