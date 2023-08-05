import java.util.*;
public class FindSubset{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] dp=new int[n+1];
        System.out.print(fact(n,dp));
    }
    public static int fact(int n,int[] dp)
    {
        if(n==1)
        return 1;
        if(dp[n]!=0)
        return dp[n];
        dp[n]=n*fact(n-1,dp);
        return dp[n];
    }
}