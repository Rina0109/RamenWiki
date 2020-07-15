<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Wiki;
use App\ResultChart;

class Stores extends Model
{
    protected $table = 'store';
    public function search($keyword)
    {
        $storeData = [];
        $wiki = new Wiki;
        $resultChart = new ResultChart;
        foreach ($this->where('store_name', 'LIKE', "%{$keyword}%")->get() as $store) {
            $wikiData = $wiki::where('store_id', $store->id)->get()->first();
            if ($wikiData == null) {
                $resultChartData = null;
            } else {
                $resultChartData = $resultChart::where('wiki_id', $wikiData->id)->get()->first();
            }
            $storeData[] = [
                'store'=>$store,
                'wiki'=>$wikiData,
                'resultChart'=>$resultChartData
            ];
        }
        return json_encode($storeData);
    }
}
