import { Button } from "@/components/ui/button";
import { BookOpen, Award, BarChart, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
	return (
		<div className="bg-gradient-to-b from-[#f0f9ff] to-white dark:from-gray-900 dark:to-gray-950">
			<div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
				<div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
					<div className="flex flex-col justify-center space-y-4">
						<div className="inline-flex items-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-400">
							<CheckCircle className="mr-1 h-4 w-4" />
							Learn smarter, not harder
						</div>
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								Master any subject with{" "}
								<span className="text-emerald-500 dark:text-emerald-400">
									daily practice
								</span>
							</h1>
							<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
								Join millions of learners using our scientifically-proven method to make
								learning stick. Just 10 minutes a day.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button
								size="lg"
								className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700"
							>
								Start Learning Free
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-emerald-200 dark:border-emerald-800"
							>
								Explore Courses
							</Button>
						</div>
						<div className="flex items-center space-x-4 pt-4">
							<div className="flex -space-x-2">
								{[1, 2, 3, 4].map((i) => (
									<div
										key={i}
										className="inline-block h-8 w-8 rounded-full bg-gray-100 ring-2 ring-white dark:bg-gray-800 dark:ring-gray-950"
									/>
								))}
							</div>
							<div className="text-sm text-gray-500 dark:text-gray-400">
								Join{" "}
								<span className="font-medium text-gray-900 dark:text-gray-50">2M+</span>{" "}
								learners worldwide
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4 pt-8 md:grid-cols-3">
							<div className="flex items-center space-x-2">
								<BookOpen className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
								<span className="text-sm font-medium">50+ Subjects</span>
							</div>
							<div className="flex items-center space-x-2">
								<Award className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
								<span className="text-sm font-medium">Earn Certificates</span>
							</div>
							<div className="flex items-center space-x-2">
								<BarChart className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
								<span className="text-sm font-medium">Track Progress</span>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center lg:justify-end">
						<div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px]">
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="relative h-[320px] w-[320px] md:h-[400px] md:w-[400px] rounded-3xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden">
									<Image
										src="/placeholder.svg?height=400&width=400"
										alt="Study App Interface"
										width={400}
										height={400}
										className="object-cover"
									/>
								</div>
							</div>
							<div className="absolute top-12 -right-4 h-16 w-40 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 p-3 shadow-lg">
								<div className="flex items-center space-x-2">
									<div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
										7
									</div>
									<div>
										<div className="text-xs text-gray-500 dark:text-gray-400">
											Current Streak
										</div>
										<div className="text-sm font-medium">7 Days</div>
									</div>
								</div>
							</div>
							<div className="absolute bottom-12 -left-4 h-16 w-40 rounded-lg bg-blue-100 dark:bg-blue-900/50 p-3 shadow-lg">
								<div className="flex items-center space-x-2">
									<div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
										85
									</div>
									<div>
										<div className="text-xs text-gray-500 dark:text-gray-400">
											Mastery Score
										</div>
										<div className="text-sm font-medium">85%</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
