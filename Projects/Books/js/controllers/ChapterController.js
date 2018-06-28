app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
  books.success(function(data) {
    
	$scope.book = data[$routeParams.bookId];  
	$scope.chapter = $scope.book.chapters[$routeParams.chapterId];

    
    if($routeParams.chapterId >= $scope.book.chapters.length - 1) {
      $scope.nextChapterIndex = "#";
    }
  });

  
  $scope.currentBookIndex = parseInt($routeParams.bookId);
  $scope.currentChapterIndex = parseInt($routeParams.chapterId);
  $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
}]);