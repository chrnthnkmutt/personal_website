import { revalidateTag, revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get('secret');
  
  // Check for secret to prevent unauthorized revalidations
  if (secret !== process.env.REVALIDATE_SECRET && secret !== 'dev') {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    // Revalidate all content types
    revalidateTag('heroe');
    revalidateTag('talk');
    revalidateTag('publication');
    revalidateTag('profile');
    revalidateTag('job');
    revalidateTag('project');
    
    // Also revalidate the about page specifically
    revalidatePath('/about');
    revalidatePath('/talks');
    revalidatePath('/talks/speaking');
    revalidatePath('/talks/publications');

    return NextResponse.json({ 
      revalidated: true, 
      timestamp: new Date().toISOString(),
      message: 'All content types revalidated successfully' 
    });
  } catch (err) {
    return NextResponse.json({ 
      message: 'Error revalidating', 
      error: err 
    }, { status: 500 });
  }
}