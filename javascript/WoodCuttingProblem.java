import java.util.*;
import java.lang.*;

public class WoodCuttingProblem
{
	public static void main (String[] args) throws java.lang.Exception
	{
		Scanner sc=new Scanner(System.in);
        int N=sc.nextInt();
        long M=sc.nextLong();
        long[] arr=new long[N];
        for(int i=0;i<N;i++)
        {
            arr[i]=sc.nextLong();
        }
        Arrays.sort(arr);
        System.out.print(solve(arr,N,M));
	}
    public static long solve(long[] arr,int N,long M){
        long min=0;
        long max=arr[N-1];
        long ans=0;
        while(min<=max)
        {
            long mid=min+(max-min)/2;
            if(check(arr,mid,M)){
              ans=mid;
              min=mid+1;
            }else{
              max=mid-1;
            }
        }
        return ans;
    }
    public static boolean check(long[] arr,long key,long M)
    {
        int n=arr.length;
        long sum=0;
        for(int i=0;i<n;i++)
        {
            if(arr[i]>key)
            {
               sum+=(arr[i]-key);
            }
        }
        if(sum>=M)
        return true;
        else
        return false;
    }
}