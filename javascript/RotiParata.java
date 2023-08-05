import java.util.Scanner;

public class RotiParata{
    public static void main(String[] args) {
        // 10 -> no of ordering porota
        // 4 1 2 3 4 -> first one is the no of L, another one is number of rank of L cooks
        Scanner sc=new Scanner(System.in);
        int P=sc.nextInt();
        int L=sc.nextInt();
        int[] arr=new int[L];
        for(int i=0;i<L;i++)
        {
            arr[i]=sc.nextInt();
        }
        int low=0;
        int high=Integer.MAX_VALUE;
        int ans=0;
        while(low<=high)
        {
            int mid=low+(high-low)/2;
            if(check(arr,mid,L,P)){
                ans=mid;
                high=mid-1;
            }else{
                low=mid+1;
            }
        }
        System.out.println(ans);
    }
    public static boolean check(int[] arr,int key,int L,int P){
        int time=0;
        int paratha=0;
        for(int i=0;i<L;i++)
        {
            time=arr[i];
            int j=2;
            while(time<=key)
            {
                paratha++;
                time+=j*arr[i];
                j++;
            }
            if(paratha>=P)
            return true;
        }
        return false;
    }
}